import { describe, expect, it } from 'vitest';
import {
  buildCatalogState,
  buildProductCards,
  findFeaturedProduct,
} from '../../src/index.js';

const products = [
  { id: 'p1', name: 'Notebook', price: 4.5 },
  { id: 'p2', name: 'Pen', price: 1.2 },
];

describe('map products for ui', () => {
  it('transforms products into card objects', () => {
    expect(buildProductCards(products)).toEqual([
      { id: 'p1', title: 'Notebook', priceLabel: '$4.50' },
      { id: 'p2', title: 'Pen', priceLabel: '$1.20' },
    ]);
  });

  it('finds one featured product by id', () => {
    expect(findFeaturedProduct(products, 'p2')).toEqual({ id: 'p2', name: 'Pen', price: 1.2 });
  });

  it('returns null when the featured product is missing', () => {
    expect(findFeaturedProduct(products, 'missing')).toBeNull();
  });

  it('builds a predictable catalog state object', () => {
    expect(buildCatalogState(products, 'p1')).toEqual({
      cards: [
        { id: 'p1', title: 'Notebook', priceLabel: '$4.50' },
        { id: 'p2', title: 'Pen', priceLabel: '$1.20' },
      ],
      cardsCount: 2,
      featuredProductName: 'Notebook',
    });
  });
});
