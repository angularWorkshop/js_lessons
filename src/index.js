'use strict';

export function buildProductCards(products) {
  return products.map(product => ({
    id: product.id,
    title: product.name,
    priceLabel: `$${product.price.toFixed(2)}`,
  }));
}

export function findFeaturedProduct(products, featuredId) {
  return products.find(product => product.id === featuredId) ?? null;
}

export function buildCatalogState(products, featuredId) {
  const cards = buildProductCards(products);
  const featuredProduct = findFeaturedProduct(products, featuredId);

  return {
    cards,
    cardsCount: cards.length,
    featuredProductName: featuredProduct ? featuredProduct.name : null,
  };
}
