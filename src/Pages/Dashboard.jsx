import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState(null);

  const projects = [
    { name: "E-commerce Website", status: "active", earning: 5000 },
    { name: "Portfolio Website", status: "completed", earning: 3000 },
    { name: "Blog Platform", status: "active", earning: 2000 },
    { name: "Dashboard UI", status: "active", earning: 4000 },
    { name: "Landing Page", status: "completed", earning: 2500 },
    { name: "Mobile App UI", status: "active", earning: 3500 },
    { name: "Admin Panel", status: "completed", earning: 4500 },
    { name: "CRM System", status: "active", earning: 6000 },
    { name: "Booking App", status: "active", earning: 3000 },
    { name: "Chat App", status: "completed", earning: 2000 },
    { name: "NFT Website", status: "active", earning: 7000 },
    { name: "Restaurant Website", status: "completed", earning: 2800 },
    { name: "Education Platform", status: "active", earning: 5200 },
    { name: "Job Portal", status: "active", earning: 8000 },
    { name: "Fintech Dashboard", status: "active", earning: 9000 },
  ];

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: "📁",
      color: "#6366f1",
      type: "projects",
    },
    {
      title: "Active Jobs",
      value: projects.filter(p => p.status === "active").length,
      icon: "⚡",
      color: "#f59e0b",
      type: "active",
    },
    {
      title: "Completed",
      value: projects.filter(p => p.status === "completed").length,
      icon: "✅",
      color: "#10b981",
      type: "completed",
    },
    {
      title: "Earnings",
      value: `₹${projects.reduce((acc, p) => acc + p.earning, 0)}`,
      icon: "💰",
      color: "#bf1d1d",
      type: "earnings",
    },
  ];

  const getData = () => {
    if (!selected) return [];

    if (selected.type === "projects") return projects;

    if (selected.type === "active")
      return projects.filter(p => p.status === "active");

    if (selected.type === "completed")
      return projects.filter(p => p.status === "completed");

    if (selected.type === "earnings")
      return projects;
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Dashboard Overview</h1>
        <p style={styles.subtitle}>
          Track all your projects, progress and earnings
        </p>

        <div style={styles.grid}>
          {stats.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="dash-card"
              style={{
                ...styles.card,
                borderTop: `4px solid ${item.color}`,
                cursor: "pointer",
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <h2 style={{ color: item.color }}>{item.value}</h2>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {selected && (
          <div style={styles.detailBox}>
            <h2 style={{ color: selected.color }}>
              {selected.title} Details
            </h2>

            {getData().map((p, i) => (
              <div key={i} style={styles.row}>
                <span>{p.name}</span>
                <span>
                  {selected.type === "earnings"
                    ? `₹${p.earning}`
                    : p.status}
                </span>
              </div>
            ))}

            {selected.type === "earnings" && (
              <h3 style={{ marginTop: "15px" }}>
                Total: ₹
                {getData().reduce((acc, p) => acc + p.earning, 0)}
              </h3>
            )}
          </div>
        )}

<div style={styles.actions}>
  <Link to="/freelancer" style={styles.btn}>
    🔍 Explore Freelancers
  </Link>

  <Link to="/jobs" style={styles.btn}>
    💼 View Jobs
  </Link>

  <Link to="/postjob" style={styles.btn}>
    ➕ Post New Job
  </Link>

  <Link to="/services" style={styles.btn}>
    🧩 View Services
  </Link>

  <Link to="/profile" style={styles.btn}>
    👤 My Profile
  </Link>
</div>
      </div>

      <style>
        {`
        .dash-card {
          background: white;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          animation: popIn 0.6s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .dash-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        @keyframes popIn {
          from {opacity:0; transform:translateY(20px);}
          to {opacity:1; transform:translateY(0);}
        }
        `}
      </style>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "50px 20px",
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    textAlign: "center",
  },

  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  detailBox: {
    maxWidth: "900px",
    margin: "40px auto",
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  actions: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },

  btn: {
    textDecoration: "none",
    background: "#1dbf73",
    color: "white",
    padding: "12px 20px",
    borderRadius: "25px",
    fontWeight: "bold",
  },
};

export default Dashboard;