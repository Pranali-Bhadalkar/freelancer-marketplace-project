import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Explore Our Services</h1>

        <p style={styles.subtitle}>
          Choose from a wide range of professional freelance services
        </p>
        <div style={styles.line}></div>
        <div style={styles.cards}>

          <div
           className="service-card"
  style={styles.card}
  onClick={() => navigate("/freelancer/priya-sharma")}>
<img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" style={styles.img} />
<h2 style={styles.heading}>Web Development</h2>
<p style={styles.text}>Modern websites and web applications.</p>
</div>

          <div
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/rahul-patil")}>
<img src="https://cdn-icons-png.flaticon.com/512/1055/1055686.png" style={styles.img} />
            <h2 style={styles.heading}>UI/UX Design</h2>
            <p style={styles.text}>Beautiful and user-friendly designs.</p>
          </div>

          <div
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/kunal-raut")}>
            <img src="https://cdn-icons-png.flaticon.com/512/888/888874.png" style={styles.img} />
            <h2 style={styles.heading}>App Development</h2>
            <p style={styles.text}>Android and iOS mobile applications.</p>
          </div>

          <div 
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/sneha-joshi")}>
<img src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" style={styles.img} />
            <h2 style={styles.heading}>Content Writing</h2>
            <p style={styles.text}>Blogs, articles and website content.</p>
          </div>

          <div 
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/amit-kulkarni")}>
<img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" style={styles.img} />
            <h2  style={styles.heading}>Digital Marketing</h2>
            <p style={styles.text}>SEO, social media and online growth.</p>
          </div>
          
          <div
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/prathamesh-varma")}>
<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" style={styles.img} />
            <h2  style={styles.heading}>Social Media Marketing</h2>
            <p style={styles.text}>Creating and managing posts, ads and engagement across platforms like Instagram, Facebook and Twitter.</p>
          </div>

          <div 
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/arya-vadkar")}>
<img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" style={styles.img} />
            <h2  style={styles.heading}>Logo Design</h2>
            <p style={styles.text}>Unique and creative logo designs for brands, startups and businesses.</p>
          </div>

          <div 
           className="service-card"
          style={styles.card}
          onClick={() => navigate("/freelancer/payal-tiwari")}>
<img src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png" style={styles.img} />
            <h2  style={styles.heading}>Graphic Design</h2>
            <p style={styles.text}>Logos, banners and branding solutions.</p>
          </div>

        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
  padding: "40px 20px",
  textAlign: "center",
  background: "#f8fafc",
  minHeight: "100vh",
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
  
img: {
  width: "55px",
  height: "55px",
  marginBottom: "10px",
  transition: "transform 0.4s ease",
},

heading: {
  fontSize: "24px",
  color: "#1e293b",
  marginBottom: "12px",
},

text: {
  color: "#64748b",
  lineHeight: "1.7",
  fontSize: "15px",
},

 cards: {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  maxWidth: "1100px",
  margin: "0 auto",
  justifyItems: "center",
  alignItems: "stretch",
},

 card: {
  width: "260px",
  background: "white",
  padding: "25px",
  borderRadius: "15px",

  animation: "floatIn 0.8s ease forwards",
  animationFillMode: "forwards",
  opacity: 0,
  transform: "translateY(30px)",

  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
},
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.container {
  animation: pageFade 0.8s ease;
}

@keyframes pageFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.service-card {
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transform-style: preserve-3d;
  cursor: pointer;
}


.service-card:hover {
  transform: translateY(-14px) scale(1.06);
  box-shadow: 0 35px 70px rgba(37,99,235,0.25);
  border-color: #2563eb;
}


.service-card h2 {
  transition: all 0.3s ease;
}

.service-card:hover h2 {
  color: #2563eb;
  transform: translateX(6px);
}


.service-card img {
  transition: transform 0.5s ease;
  animation: floatIcon 3s ease-in-out infinite;
}

.service-card:hover img {
  transform: rotate(-10deg) scale(1.2);
}

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}


.service-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 120%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.35),
    transparent
  );
  transition: 0.6s ease;
}

.service-card:hover::after {
  left: 120%;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(37,99,235,0.18), transparent);
  opacity: 0;
  transition: 0.4s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card button:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 25px rgba(29,191,115,0.4);
}
`;
document.head.appendChild(styleSheet);

export default Services;