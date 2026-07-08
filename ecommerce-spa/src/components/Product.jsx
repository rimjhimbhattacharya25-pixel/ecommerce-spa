import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image-box">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h2 className="product-title">
          {product.title}
        </h2>

        <p className="product-description">
          {product.description.substring(0, 80)}...
        </p>

        <div className="product-info">

          <div className="price">
            ${product.price}
          </div>

          <div className="rating">
            ⭐ {product.rating}
          </div>

        </div>

        <button
          className="details-btn"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>

      </div>
    </div>
  );
}

export default Product;