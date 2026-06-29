import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    budget: "",
    category: "",
    description: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.budget.trim() ||
      !form.category ||
      !form.description.trim()
    ) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const newJob = {
      ...form,
      id: Date.now()
    };

    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));

    setMessage("Job posted successfully!");

    setForm({
      title: "",
      budget: "",
      category: "",
      description: ""
    });
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Post a Job</h1>
          <p style={styles.subtitle}>Fill details to hire freelancer</p>

          <form onSubmit={handleSubmit} style={styles.form}>
            
            <input
              name="title"
              placeholder="Job Title"
              value={form.title}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="budget"
              placeholder="Budget"
              value={form.budget}
              onChange={handleChange}
              style={styles.input}
            />

            <small style={{ color: "#64748b", fontSize: "12px" }}>
            </small>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="App Development">App Development</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>

            <textarea
              name="description"
              placeholder="Job Description"
              value={form.description}
              onChange={handleChange}
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Post Job
            </button>

            {message && <p style={styles.msg}>{message}</p>}
          </form>
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: linear-gradient(135deg, #eef2ff, #e0f2fe);
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:"#f8fafc",
  },

  card: {
    width: "450px",
    background: "#f8fafc",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    textAlign: "center"
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

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none"
  },

  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
    minHeight: "100px",
    resize: "none"
  },

  button: {
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #1dbf73, #16a34a)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },

  msg: {
    marginTop: "10px",
    fontWeight: "600",
    color: "#0f172a"
  }
};

