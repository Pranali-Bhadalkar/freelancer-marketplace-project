import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedUser) {
      setUser(loggedUser);
      setEditData(loggedUser);
    }
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Please login to view profile
        </h2>
      </>
    );
  }

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const updatedUser = { ...editData };

    setUser(updatedUser);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setOpen(false);
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.avatar}>👤</div>

          <h2 style={styles.name}>{user.name}</h2>

          <p style={styles.role}>{user.role}</p>

          <div style={styles.info}>
            <p>
              <b>Email:</b> {user.email}
            </p>

            {user.role === "freelancer" && (
              <p>
                <b>Skills:</b> {user.skills || "Not added"}
              </p>
            )}
          </div>

          <button style={styles.button} onClick={() => setOpen(true)}>
            Edit Profile
          </button>
        </div>
      </div>

      {open && editData && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3>Edit Profile</h3>

            <input
              name="name"
              value={editData.name || ""}
              onChange={handleChange}
              placeholder="Name"
              style={styles.input}
            />

            {user.role === "freelancer" && (
              <input
                name="skills"
                value={editData.skills || ""}
                onChange={handleChange}
                placeholder="Skills"
                style={styles.input}
              />
            )}

            <div style={styles.btnRow}>
              <button style={styles.saveBtn} onClick={handleSave}>
                Save
              </button>

              <button
                style={styles.closeBtn}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
  },

  card: {
    width: "420px",
    padding: "35px",
    background: "white",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    fontSize: "70px",
    marginTop:"20px",
    marginBottom: "20px",
  },

  name: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "15px",
    color: "#0f172a",
    wordBreak: "break-word",
  },

  role: {
    fontSize: "20px",
    color: "#64748b",
    textTransform: "capitalize",
    marginBottom: "5px",
  },

  info: {
    width: "100%",
    textAlign: "left",
    marginTop: "10px",
    lineHeight: "1.8",
    fontSize:"20px",
  },

  button: {
    marginTop: "20px",
    padding: "10px 25px",
    background: "#1dbf73",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "320px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  saveBtn: {
    flex: 1,
    background: "#1dbf73",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  closeBtn: {
    flex: 1,
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Profile;