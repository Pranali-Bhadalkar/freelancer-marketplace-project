import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Posted Jobs</h1>

        <p style={styles.subtitle}>
          Manage and track all your posted job listings in one place
        </p>

        {jobs.length === 0 ? (
          <p style={styles.empty}>No jobs posted yet</p>
        ) : (
          <div style={styles.grid}>
            {jobs.map((job, index) => (
              <div key={index} className="card" style={styles.card}>
                <h2>{job.title}</h2>
                <p>💰 Budget: ₹{job.budget}</p>
                <p>📂 Category: {job.category}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>
        {`
          .card {
            animation: fadeUp 0.6s ease;
            transition: 0.3s;
          }

          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          }

          @keyframes fadeUp {
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
    padding: "40px",
    minHeight: "100vh",
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


  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },

  empty: {
    textAlign: "center",
    color: "gray",
  },
};

export default Jobs;




