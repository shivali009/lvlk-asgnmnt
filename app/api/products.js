export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function getCategoryProducts(categoryName) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
