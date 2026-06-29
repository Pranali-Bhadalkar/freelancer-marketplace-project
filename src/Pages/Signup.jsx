import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "freelancer",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === data.email);

    if (userExists) {
      alert("Account already exists!");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Create Account</h1>

<p style={styles.subtitle}>
  Start your journey with FreelanceHub and unlock endless opportunities
</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                style={styles.passwordInput}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showBtn}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div style={styles.roleContainer}>
              <label style={styles.roleLabel}>Join As:</label>

              <div style={styles.roleOptions}>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="client"
                    checked={data.role === "client"}
                    onChange={handleChange}
                  />
                  Client
                </label>

                <label>
                  <input
                    type="radio"
                    name="role"
                    value="freelancer"
                    checked={data.role === "freelancer"}
                    onChange={handleChange}
                  />
                  Freelancer
                </label>
              </div>
            </div>

            <button type="submit" style={styles.button}>
              Create Account
            </button>
          </form>
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

  card: {
    width: "420px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },

  passwordContainer: {
    display: "flex",
    marginBottom: "12px",
  },

  passwordInput: {
    flex: 1,
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "10px 0 0 10px",
  },

  showBtn: {
    padding: "14px",
    border: "1px solid #ddd",
    background: "#f1f5f9",
    cursor: "pointer",
    borderRadius: "0 10px 10px 0",
  },

  roleContainer: {
    textAlign: "left",
    margin: "15px 0",
  },

  roleLabel: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
  },

  roleOptions: {
    display: "flex",
    gap: "20px",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#1dbf73",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Signup;