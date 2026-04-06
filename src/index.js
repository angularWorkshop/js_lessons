'use strict';

export function buildProductCards(products) {
  // TODO: use map() and return card objects
  return [];
}

export function findFeaturedProduct(products, featuredId) {
  // TODO: use find() and return the matching product or null
  return null;
}

export function buildCatalogState(products, featuredId) {
  const cards = buildProductCards(products);
  const featuredProduct = findFeaturedProduct(products, featuredId);

  return {
    cards,
    cardsCount: cards.length,
    featuredProductName: '', // TODO: product name or null
  };
}
