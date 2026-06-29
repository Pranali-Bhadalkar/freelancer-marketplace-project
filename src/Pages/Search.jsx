import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

function Search() {
  const { query } = useParams();
  const navigate = useNavigate();

  const freelancerImages = {
    "Priya Sharma": "https://randomuser.me/api/portraits/women/44.jpg",
    "Rahul Patil": "https://randomuser.me/api/portraits/men/32.jpg",
    "Kunal Raut": "https://randomuser.me/api/portraits/men/11.jpg",
    "Sneha Joshi": "https://randomuser.me/api/portraits/women/65.jpg",
    "Amit Kulkarni": "https://randomuser.me/api/portraits/men/55.jpg",
    "Prathamesh Varma": "https://randomuser.me/api/portraits/men/51.jpg",
    "Arya Vadkar": "https://randomuser.me/api/portraits/women/22.jpg",
    "Payal Tiwari": "https://randomuser.me/api/portraits/women/28.jpg",
  };

  const freelancers = [
    { name: "Priya Sharma", skill: "Web Developer", rating: 4.9, price: 1200 },
    { name: "Rahul Patil", skill: "UI UX Designer", rating: 4.9, price: 1000 },
    { name: "Kunal Raut", skill: "App Developer", rating: 5, price: 5500 },
    { name: "Sneha Joshi", skill: "Content Writer", rating: 4.6, price: 700 },
    { name: "Amit Kulkarni", skill: "Digital Marketer", rating: 4.4, price: 5000 },
    { name: "Prathamesh Varma", skill: "Social Media Marketing", rating: 4.7, price: 3500 },
    { name: "Arya Vadkar", skill: "Logo Designer", rating: 4.5, price: 1500 },
    { name: "Payal Tiwari", skill: "Graphic Designer", rating: 4.8, price: 1000 },
  ];

  const normalize = (text) =>
    (text || "")
      .toLowerCase()
      .replace(/-/g, " ")
      .trim();

  const q = normalize(query);

  const match = freelancers.find((f) => {
    const name = normalize(f.name);
    const skill = normalize(f.skill);

    return name.includes(q) || skill.includes(q);
  });

  const filtered = match
    ? [
        {
          ...match,
          image: freelancerImages[match.name],
        },
      ]
    : [];

  return (
    <>
      <Navbar />

      <div style={styles.page}>
        <h1 style={styles.title}>
          Search Results for:{" "}
          <span style={{ color: "#1dbf73" }}>{query}</span>
        </h1>

        <div style={styles.grid}>
          {filtered.length > 0 ? (
            filtered.map((f, i) => (
              <div key={i} style={styles.card}>
                <div
                  style={{
                    ...styles.avatar,
                    backgroundImage: `url(${f.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <h3>{f.name}</h3>
                <p>{f.skill}</p>
                <p>⭐ {f.rating}</p>
                <p>₹ {f.price}/hr</p>

                <button
                  style={styles.btn}
                  onClick={() =>
                    navigate(
                      `/freelancer/${f.name
                        .toLowerCase()
                        .trim()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  View Profile
                </button>
              </div>
            ))
          ) : (
            <p style={{ color: "white" }}>No freelancer found</p>
          )}
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#cbd5e1",
    padding: "40px",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    color:"black",
    background: "#fff",
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    margin: "0 auto 10px",
  },
  btn: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#1dbf73",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Search;