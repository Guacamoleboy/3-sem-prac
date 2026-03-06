const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function searchProducts(query: string) {
  console.log(API_URL); // DEBUG
  const res = await fetch(`${API_URL}/api/products/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}