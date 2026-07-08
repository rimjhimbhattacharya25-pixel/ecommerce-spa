import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div className="page">
      <h1>Login</h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2>Welcome to ReactCart</h2>

        <p style={{ margin: "20px 0" }}>
          Click the button below to continue as a guest.
        </p>

        <button className="primary-btn" onClick={handleLogin}>
          Login as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;