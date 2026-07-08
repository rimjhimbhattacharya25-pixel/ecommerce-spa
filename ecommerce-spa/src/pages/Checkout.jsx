import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h1>Checkout</h1>
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="page">

      <h1>Checkout</h1>

      {cartItems.map((item) => (

        <div className="checkout-card" key={item.id}>

          <img
            src={item.thumbnail}
            alt={item.title}
          />

          <div className="checkout-info">

            <h2>{item.title}</h2>

            <p>${item.price}</p>

            <div className="quantity">

              <button
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="checkout-total">

        <h2>Total : ${totalPrice.toFixed(2)}</h2>

        <button
          className="clear-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

    </div>
  );
}

export default Checkout;