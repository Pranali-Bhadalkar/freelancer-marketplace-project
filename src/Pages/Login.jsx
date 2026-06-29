import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("Account not found!");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect Password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful!");

    navigate("/profile"); 
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome Back</h1>

          <p style={styles.subtitle}>
            Login to continue your freelancing journey
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
  },

  card: {
    width: "420px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  title: {
  fontSize: "44px",
  fontWeight: "650",
  color: "#0f172a",
  textAlign: "center",
  marginBottom: "25px",
},

  subtitle: {
    fontSize: "25px",
    color: "#64748b",
    marginBottom: "70px",
  },


  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },

  passwordContainer: {
    display: "flex",
    marginBottom: "15px",
  },

  passwordInput: {
    flex: 1,
    padding: "14px",
    borderRadius: "10px 0 0 10px",
    border: "1px solid #ddd",
  },

  showBtn: {
    padding: "14px",
    border: "1px solid #ddd",
    background: "#f1f5f9",
    cursor: "pointer",
    borderRadius: "0 10px 10px 0",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#1dbf73",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;