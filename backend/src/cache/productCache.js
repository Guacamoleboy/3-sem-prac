let productsCache = [];
let loaded = false;

export function setCache(products) {
  productsCache = products.map(p => ({
    ...p,
    searchName: p.name.toLowerCase(),
    searchCategory: p.category_name.toLowerCase(),
    searchSubcategory: p.subcategory_name.toLowerCase(),
    images: (p.images || []).filter(img => img.path)
  }));
  loaded = true;
  console.log(`Loaded ${productsCache.length} products into cache`);
}

export function searchProducts(query, limit = 10) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return productsCache
    .filter(p =>
      p.searchName.split(' ').some(word => word.startsWith(q)) ||
      p.searchCategory.startsWith(q) ||
      p.searchSubcategory.startsWith(q)
    )
    .slice(0, limit);
}

export function getCache() {
  return productsCache;
}

export function isLoaded() {
  return loaded;
}