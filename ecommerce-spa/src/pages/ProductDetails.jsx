import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loader">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  return (
    <section className="product-details">

      <div className="details-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

      </div>

      <div className="details-content">

        <span className="category">
          {product.category}
        </span>

        <h1>{product.title}</h1>

        <p className="description">
          {product.description}
        </p>

        <div className="info-row">
          <h2>${product.price}</h2>
          <h3>⭐ {product.rating}</h3>
        </div>

        <p className="stock">
          Stock : {product.stock}
        </p>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </section>
  );
}

export default ProductDetails;