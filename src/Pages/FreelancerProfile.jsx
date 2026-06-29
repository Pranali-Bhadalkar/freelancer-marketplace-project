import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const freelancers = [
  {
    name: "Priya Sharma",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "4.9",
    experience: "5 Years",
    price: "₹1200/hr",
    skills: "React, Node.js, MongoDB",
    email: "priyasharma2021@gmail.com",
    phone: "+91 9684085004",
    availability: "Available Now",
    bio: "Professional web developer creating responsive websites, e-commerce stores and modern web applications for startups and businesses.",
  },

  {
    name: "Rahul Patil",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    experience: "4 Years",
    price: "₹1000/hr",
    skills: "Figma, Adobe XD, Wireframing",
    email: "rahulpatil2096@gmail.com",
    phone: "+91 7089528166",
    availability: "Available Tomorrow",
    bio: "Designing attractive user interfaces and smooth user experiences for websites and mobile applications.",
  },

  {
    name: "Kunal Raut",
    role: "App Developer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: "5",
    experience: "6 Years",
    price: "₹1500/hr",
    skills: "Flutter, React Native, Firebase",
    email: "kunal8945raut@gmail.com",
    phone: "+91 8682976103",
    availability: "Busy - Available Next Week",
    bio: "Building high-performance Android and iOS mobile applications with modern technologies.",
  },

  {
    name: "Sneha Joshi",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: "4.6",
    experience: "3 Years",
    price: "₹700/hr",
    skills: "Blogs, SEO Writing, Copywriting",
    email: "sneha11joshi@gmail.com",
    phone: "+91 9284735011",
    availability: "Available Now",
    bio: "Creating engaging blogs, website content, product descriptions and SEO-friendly articles.",
  },

  {
    name: "Amit Kulkarni",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: "4.4",
    experience: "5 Years",
    price: "₹1100/hr",
    skills: "SEO, Google Ads, Analytics",
    email: "amit.marketing@gmail.com",
    phone: "+91 8530725062",
    availability: "Available Today",
    bio: "Helping brands grow online through digital marketing strategies and targeted campaigns.",
  },

  {
    name: "Prathamesh Varma",
    role: "Social Media Marketer",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: "4.7",
    experience: "4 Years",
    price: "₹900/hr",
    skills: "Instagram, Facebook, Branding",
    email: "prathameshvarma@gmail.com",
    phone: "+91 9386289410",
    availability: "Available Tomorrow",
    bio: "Managing social media accounts and building strong online presence for businesses.",
  },

  {
    name: "Arya Vadkar",
    role: "Logo Designer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: "4.5",
    experience: "4 Years",
    price: "₹850/hr",
    skills: "Logo Design, Branding, Illustrator",
    email: "arya1065vadkar@gmail.com",
    phone: "+91 9629751065",
    availability: "Available Now",
    bio: "Creating unique and memorable logos that represent brands professionally.",
  },

  {
    name: "Payal Tiwari",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: "4.8",
    experience: "5 Years",
    price: "₹950/hr",
    skills: "Photoshop, Illustrator, Canva",
    email: "payaltiwari.graphics@gmail.com",
    phone: "+91 9895173150",
    availability: "Available Today",
    bio: "Designing creative graphics, social media posts, banners and branding materials.",
  },
];

function FreelancerProfile() {
  const [showInfo, setShowInfo] = useState(false);
  const { name } = useParams();

  const freelancer =
    freelancers.find(
      (f) =>
        f.name.toLowerCase().trim().replace(/\s+/g, "-") === name
    ) || freelancers[0];

  return (
    <>
      <Navbar />

      <div style={styles.page}>
        <div style={styles.card}>
          <img
            src={freelancer.image}
            alt={freelancer.name}
            style={styles.image}
          />

          <h1>{freelancer.name}</h1>

          <h3 style={{ color: "#38bdf8" }}>{freelancer.role}</h3>

          <p style={styles.bio}>{freelancer.bio}</p>

          <div style={styles.infoBox}>
            <p>⭐ Rating: {freelancer.rating}</p>
            <p>💼 Experience: {freelancer.experience}</p>
            <p>💰 Rate: {freelancer.price}</p>
            <p>🛠 Skills: {freelancer.skills}</p>
          </div>

          <button
            style={styles.btn}
            onClick={() => setShowInfo(!showInfo)}
          >
            Hire Now
          </button>

          {showInfo && (
            <div style={styles.contactBox}>
              <h3>📩 Contact Freelancer</h3>

              <p>
                <strong>Email:</strong> {freelancer.email}
              </p>

              <p>
                <strong>Phone:</strong> {freelancer.phone}
              </p>

              <p>
                <strong>Status:</strong> {freelancer.availability}
              </p>

              <p>
                Send your project requirements and get response within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b,#111827)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  card: {
    width: "500px",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "35px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #38bdf8",
    marginBottom: "15px",
  },

  bio: {
    color: "#555",
    lineHeight: "1.7",
    marginTop: "10px",
  },

  infoBox: {
    marginTop: "20px",
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "left",
  },

  contactBox: {
    marginTop: "20px",
    background: "#e0f2fe",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "left",
    lineHeight: "1.8",
    border: "1px solid #38bdf8",
  },

  btn: {
    marginTop: "25px",
    padding: "12px 30px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default FreelancerProfile;