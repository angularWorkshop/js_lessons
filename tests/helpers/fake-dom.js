'use strict';

function dataNameToProp(name) {
  return name.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function propToDataName(name) {
  return name.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
}

class FakeClassList {
  constructor(owner) {
    this.owner = owner;
    this.values = new Set();
  }

  add(...tokens) {
    for (const token of tokens) {
      if (token) {
        this.values.add(token);
      }
    }
    this.sync();
  }

  remove(...tokens) {
    for (const token of tokens) {
      this.values.delete(token);
    }
    this.sync();
  }

  contains(token) {
    return this.values.has(token);
  }

  toggle(token, force) {
    if (force === true) {
      this.add(token);
      return true;
    }

    if (force === false) {
      this.remove(token);
      return false;
    }

    if (this.contains(token)) {
      this.remove(token);
      return false;
    }

    this.add(token);
    return true;
  }

  setFromString(value) {
    const tokens = String(value)
      .split(/\s+/)
      .map(token => token.trim())
      .filter(Boolean);
    this.values = new Set(tokens);
    this.sync();
  }

  toString() {
    return [...this.values].join(' ');
  }

  sync() {
    const className = this.toString();
    if (className) {
      this.owner.attributes.set('class', className);
    } else {
      this.owner.attributes.delete('class');
    }
  }
}

class FakeTextNode {
  constructor(text) {
    this.nodeType = 3;
    this.textContent = String(text);
    this.parentNode = null;
  }
}

function matchesSelector(node, selector) {
  if (selector.startsWith('#')) {
    return node.id === selector.slice(1);
  }

  if (selector.startsWith('.')) {
    return node.classList.contains(selector.slice(1));
  }

  const attrMatch = selector.match(/^\[([^\]=]+)(?:="([^"]*)")?\]$/);
  if (attrMatch) {
    const [, name, value] = attrMatch;
    const attrValue = node.getAttribute(name);
    return value === undefined ? attrValue !== null : attrValue === value;
  }

  return node.tagName.toLowerCase() === selector.toLowerCase();
}

function walk(node, visit) {
  visit(node);
  if (!node.children) {
    return;
  }

  for (const child of node.children) {
    walk(child, visit);
  }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.nodeType = 1;
    this.tagName = String(tagName).toUpperCase();
    this.ownerDocument = ownerDocument;
    this.parentNode = null;
    this.children = [];
    this.attributes = new Map();
    this.dataset = {};
    this.classList = new FakeClassList(this);
    this._textContent = '';
    this.disabled = false;
  }

  get className() {
    return this.classList.toString();
  }

  set className(value) {
    this.classList.setFromString(value);
  }

  get id() {
    return this.getAttribute('id') ?? '';
  }

  set id(value) {
    this.setAttribute('id', value);
  }

  get textContent() {
    if (this.children.length === 0) {
      return this._textContent;
    }

    return [this._textContent, ...this.children.map(child => child.textContent)].join('');
  }

  set textContent(value) {
    this._textContent = String(value);
    this.children = [];
  }

  append(...nodes) {
    for (const node of nodes) {
      if (node === null || node === undefined) {
        continue;
      }

      const nextNode =
        typeof node === 'string' ? this.ownerDocument.createTextNode(node) : node;
      nextNode.parentNode = this;
      this.children.push(nextNode);
    }
  }

  replaceChildren(...nodes) {
    this.children = [];
    this._textContent = '';
    this.append(...nodes);
  }

  setAttribute(name, value) {
    const normalized = String(value);

    if (name === 'class') {
      this.classList.setFromString(normalized);
      return;
    }

    this.attributes.set(name, normalized);

    if (name.startsWith('data-')) {
      this.dataset[dataNameToProp(name.slice(5))] = normalized;
    }
  }

  getAttribute(name) {
    if (name === 'class') {
      return this.classList.toString() || null;
    }

    return this.attributes.has(name) ? this.attributes.get(name) : null;
  }

  removeAttribute(name) {
    if (name === 'class') {
      this.classList.setFromString('');
      return;
    }

    this.attributes.delete(name);

    if (name.startsWith('data-')) {
      delete this.dataset[dataNameToProp(name.slice(5))];
    }
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] ?? null;
  }

  querySelectorAll(selector) {
    const matches = [];

    for (const child of this.children) {
      walk(child, node => {
        if (node.nodeType === 1 && matchesSelector(node, selector)) {
          matches.push(node);
        }
      });
    }

    return matches;
  }
}

class FakeDocument {
  constructor() {
    this.body = null;
  }

  createElement(tagName) {
    return new FakeElement(tagName, this);
  }

  createTextNode(text) {
    return new FakeTextNode(text);
  }

  querySelector(selector) {
    return this.body ? this.body.querySelector(selector) : null;
  }

  querySelectorAll(selector) {
    return this.body ? this.body.querySelectorAll(selector) : [];
  }
}

export function createFakeDocument() {
  const documentRef = new FakeDocument();
  documentRef.body = documentRef.createElement('body');
  return documentRef;
}

export function createElement(documentRef, tagName, options = {}) {
  const {
    id,
    text,
    className,
    dataset,
    attrs,
    children,
  } = options;

  const element = documentRef.createElement(tagName);

  if (id) {
    element.id = id;
  }

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  if (dataset) {
    for (const [key, value] of Object.entries(dataset)) {
      element.setAttribute(`data-${propToDataName(key)}`, value);
    }
  }

  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      element.setAttribute(key, value);
    }
  }

  if (children) {
    element.append(...children);
  }

  return element;
}
