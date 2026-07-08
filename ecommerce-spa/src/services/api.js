const BASE_URL = "https://dummyjson.com/products";

/**
 * Fetch all products
 */
export async function getProducts() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

/**
 * Fetch a single product by ID
 */
export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

/**
 * Search products
 */
export async function searchProducts(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(category) {
  try {
    const response = await fetch(
      `${BASE_URL}/category/${encodeURIComponent(category)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Category error:", error);
    throw error;
  }
}

/**
 * Fetch all categories
 */
export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Category fetch error:", error);
    throw error;
  }
}