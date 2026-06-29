import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() 
{
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        <div style={styles.logoContainer}>
          <img
            src={logo}
            alt="FreelanceHub"
            style={styles.logoImage}
          />
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Home
          </Link>

          <Link to="/services" style={styles.link}>
            Services
          </Link>

          <Link to="/freelancer" style={styles.link}>
            Freelancers
          </Link>

          <Link to="/dashboard" style={styles.link}>
            Dashboard
          </Link>
        </div>

        <div style={styles.buttons}>
          <Link to="/login">
            <button style={styles.loginBtn}>Login</button>
          </Link>

          <Link to="/signup">
            <button style={styles.joinBtn}>Join Now</button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#ffffff",
    padding: "15px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    borderBottom: "4px solid black",
  },

  container: {
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    flex: 1,
  },

  logoImage: {
    height: "50px",
    width: "200px",
    objectFit: "contain",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flex: 2,
  },

  link: {
    textDecoration: "none",
    color: "#111827",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.3s",
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    flex: 1,
  },

  loginBtn: {
    padding: "10px 22px",
    border: "2px solid #1dbf73",
    background: "transparent",
    color: "#1dbf73",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
  },

  joinBtn: {
    padding: "10px 22px",
    border: "none",
    background: "#1dbf73",
    color: "#fff",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Navbar;