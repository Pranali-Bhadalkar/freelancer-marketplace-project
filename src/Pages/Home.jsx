import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaApple,
  FaAndroid,
} from "react-icons/fa6";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;

    const q = search.toLowerCase().trim();
    navigate(`/search/${q}`);
  };

  return (
    <>
      <Navbar />

    <div style={{ height: "0px", background: "#ffffff" }}></div>

      <div style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <h1 style={styles.title}>
            Hire Top Freelancers & Grow Your Business
          </h1>

          <p style={styles.subtitle}>
            Find trusted professionals for web development, design, content writing, marketing and more
          </p>

          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Search services (web, design, app...)"
              style={styles.input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

           <button
  style={styles.button}
  onClick={handleSearch}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-3px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0)";
  }}
>
  Search
</button>
          </div>
        </div>
      </div>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Services</h2>

        <div style={styles.cards}>
          <div style={styles.card} onClick={() => navigate("/search/web")}>
            💻 Web Development
          </div>

          <div style={styles.card} onClick={() => navigate("/search/design")}>
            🎨 UI/UX Design
          </div>

          <div style={styles.card} onClick={() => navigate("/search/app")}>
            📱 App Development
          </div>

          <div style={styles.card} onClick={() => navigate("/search/content")}>
            ✍ Content Writing
          </div>

          <div style={styles.card} onClick={() => navigate("/search/digital")}>
            📈 Digital Marketing
          </div>

          <div style={styles.card} onClick={() => navigate("/search/social")}>
            📢 Social Media Marketing
          </div>

          <div style={styles.card} onClick={() => navigate("/search/logo")}>
            🖌 Logo Design
          </div>

          <div style={styles.card} onClick={() => navigate("/search/graphic")}>
            🖥 Graphic Design
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Top Freelancers</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Priya Sharma</h3>
            <p>Web Developer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/priya-sharma")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Rahul Patil</h3>
            <p>UI/UX Designer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/rahul-patil")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Kunal Raut</h3>
            <p>App Developer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/kunal-raut")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Sneha Joshi</h3>
            <p>Content Writer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/sneha-joshi")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Amit Kulkarni</h3>
            <p>Digital Marketer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/amit-kulkarni")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Prathamesh Varma</h3>
            <p>Social Media Marketing</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/prathamesh-varma")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Arya Vadkar</h3>
            <p>Logo Design</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/arya-vadkar")}
            >
              Hire Now
            </button>
          </div>

          <div style={styles.card}>
            <h3>Payal Tiwari</h3>
            <p>Graphic Designer</p>
            <button
              style={styles.hireBtn}
              onClick={() => navigate("/freelancer/payal-tiwari")}
            >
              Hire Now
            </button>
          </div>
        </div>
      </section>
 
  <style>
{`
@keyframes heroReveal {
  0% {
    opacity: 0;
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes cardPop {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`}
</style>

    <footer style={styles.footer}>
  <div style={styles.footerContainer}>

    <div style={styles.footerSection}>
      <h4>FreelanceHub</h4>
      <p>
        FreelanceHub connects businesses with skilled freelancers
        for web development, design, marketing, writing and more.
      </p>
    </div>

    <div style={styles.footerSection}>
      <h4>For Clients</h4>
      <p>Find Freelancers</p>
      <p>Post a Project</p>
      <p>Browse Services</p>
      <p>Enterprise Solutions</p>
      <p>Success Stories</p>
    </div>

    <div style={styles.footerSection}>
      <h4>For Freelancers</h4>
      <p>Find Work</p>
      <p>Create Profile</p>
      <p>Freelancer Resources</p>
      <p>Community</p>
      <p>Skill Tests</p>
    </div>

    <div style={styles.footerSection}>
      <h4>Categories</h4>
      <p>Web Development</p>
      <p>UI/UX Design</p>
      <p>Graphic Design</p>
      <p>Content Writing</p>
      <p>Digital Marketing</p>
    </div>

    <div style={styles.footerSection}>
      <h4>Company</h4>
      <p>About Us</p>
      <p>Careers</p>
      <p>Blog</p>
      <p>Press</p>
      <p>Contact Us</p>
    </div>

    <div style={styles.footerSection}>
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Trust & Safety</p>
      <p>FAQs</p>
    </div>

  </div>

  <hr style={styles.footerLine} />

  <div style={styles.footerBottom}>
  <div style={styles.leftFooter}>
  <h3 style={styles.logo}>FreelanceHub</h3>

  <span>Follow Us</span>

  <FaFacebook size={22} />
  <FaLinkedin size={22} />
  <FaXTwitter size={22} />
  <FaYoutube size={22} />
  <FaInstagram size={22} />
</div>

<div style={styles.rightFooter}>
  <span>Mobile App</span>

  <FaApple size={24} />
  <FaAndroid size={24} />
</div>
</div>
<hr style={styles.footerLine} />

<p style={styles.copyright}>
  © 2026 FreelanceHub. All Rights Reserved. | Privacy Policy | Terms of Service
</p>
</footer>
</>
  );
}

const styles = {
 hero: {
  minHeight: "85vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
},

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
  },

  content: {
  textAlign: "center",
  position: "relative",
  zIndex: 2,
  padding: "20px",
  animation: "heroReveal 1.5s ease-out",
},

title: {
  fontSize: "clamp(36px, 5vw, 52px)",
  fontWeight: "640",
  marginBottom: "30px",
  color: "#ffffff",
  animation: "slideDown 1.2s ease",
},

  subtitle: {
  fontSize: "20px",
  fontWeight:"400",
  color: "#e5e7eb",
  marginBottom: "40px",
  animation: "fadeIn 2s ease",
},

  searchBox: {
  display: "flex",
  justifyContent: "center",
  gap: "3px",
  flexWrap: "wrap",
  animation: "slideUp 1.8s ease",
},

  input: {
    width: "320px",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  },

 button: {
  padding: "14px 22px",
  background: "#1dbf73",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
},

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "44px",
    marginBottom: "30px",
    color: "#0f172a",
  },

  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },

card: {
  width: "200px",
  padding: "25px",
  background: "white",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  cursor: "pointer",
  animation: "cardPop 1s ease",
  transition: "all 0.3s ease",
},

 hireBtn: {
  marginTop: "10px",
  padding: "10px 18px",
  background: "#1dbf73",
  color: "white",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
},

footer: {
  background: "#111827",
  color: "#fff",
  padding: "20px 30px 20px 20px",
  marginTop: "50px",
},

footerContainer: {
  maxWidth: "1000px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
},

footerSection: {
  lineHeight: "1.5",
},

footerLine: {
  border: "1px solid #374151",
  marginTop: "50px",
},

footerBottom: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  marginTop:"40px",
},

leftFooter: {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  flexWrap: "wrap", 
},

rightFooter: {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginRight:"25px",
},

logo: {
  color: "#1dbf73",
  marginRight: "30px",
   marginLeft:"25px",
},

icon: {
  cursor: "pointer",
  transition: "0.3s",
},

appIcon: {
  width: "28px",
  height: "28px",
  cursor: "pointer",
},

copyright: {
  textAlign: "center",
  marginTop: "20px",
  color: "#9ca3af",
},
};

export default Home;