import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>
            Discover Amazing Products
          </h1>

          <p>
            Shop the latest electronics, fashion, beauty products,
            furniture, groceries and much more at unbeatable prices.
          </p>

          <Link to="/shop">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Shopping"
          />
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h2>🚚</h2>
          <h3>Free Shipping</h3>
          <p>Free delivery on orders above $100.</p>
        </div>

        <div className="feature-card">
          <h2>🔒</h2>
          <h3>Secure Payment</h3>
          <p>100% secure payment gateway.</p>
        </div>

        <div className="feature-card">
          <h2>⭐</h2>
          <h3>Premium Quality</h3>
          <p>Only trusted and verified products.</p>
        </div>

      </section>
    </>
  );
}

export default Home;