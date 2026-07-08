import { useEffect, useState } from "react";
import Product from "../components/Product";
import { getProducts } from "../services/api";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  if (loading) {
    return (
      <div className="loader">
        <h2>Loading Products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <section className="shop">

      <h1 className="shop-title">
        Explore Our Products
      </h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <h2 className="no-product">
          No products found.
        </h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Shop;