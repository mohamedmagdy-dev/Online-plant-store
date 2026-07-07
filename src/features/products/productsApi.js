export async function fetchProducts(apiUrl) {
  const response = await fetch(apiUrl);
  if(!response.ok){
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
}