import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Freelancers() 
{
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

  const goToProfile = (name) => {
    navigate(`/freelancer/${name.toLowerCase().trim().replace(/\s+/g, "-")}`);
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Top Freelancers</h1>

        <p style={styles.subtitle}>
          Find skilled professionals for your projects
        </p>

        <div style={styles.cards}>
          <div style={styles.card} className="card-0 card-hover">
             <img
    src={freelancerImages["Priya Sharma"]}
    alt="Priya Sharma"
    style={styles.image}
  />
            <h2>Priya Sharma</h2>
            <p>Web Developer</p>
            <p>⭐ 4.9 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Priya Sharma")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-1 card-hover">
            <img
src={freelancerImages["Rahul Patil"]}
alt="Rahul Patil"
style={styles.image}
/>
            <h2>Rahul Patil</h2>
            <p>UI/UX Designer</p>
            <p>⭐ 4.9 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Rahul Patil")}>
              Hire Now
            </button>
          </div>

         <div style={styles.card} className="card-2 card-hover">
          <img
    src={freelancerImages["Kunal Raut"]}
    alt="Kunal Raut"
    style={styles.image}
  />
            <h2>Kunal Raut</h2>
            <p>App Developer</p>
            <p>⭐ 5 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Kunal Raut")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-3 card-hover">
            <img
    src={freelancerImages["Sneha Joshi"]}
    alt="Sneha Joshi"
    style={styles.image}
  />
            <h2>Sneha Joshi</h2>
            <p>Content Writer</p>
            <p>⭐ 4.6 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Sneha Joshi")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-4 card-hover">
            <img
    src={freelancerImages["Amit Kulkarni"]}
    alt="Amit Kulkarni"
    style={styles.image}
  />
            <h2>Amit Kulkarni</h2>
            <p>Digital Marketer</p>
            <p>⭐ 4.4 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Amit Kulkarni")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-5 card-hover">
            <img
    src={freelancerImages["Prathamesh Varma"]}
    alt="Prathamesh Varma"
    style={styles.image}
  />
            <h2>Prathamesh Varma</h2>
            <p>Social Media Marketer</p>
            <p>⭐ 4.7 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Prathamesh Varma")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-6 card-hover">
            <img
    src={freelancerImages["Arya Vadkar"]}
    alt="Arya Vadkar"
    style={styles.image}
  />
            <h2>Arya Vadkar</h2>
            <p>Logo Designer</p>
            <p>⭐ 4.5 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Arya Vadkar")}>
              Hire Now
            </button>
          </div>

          <div style={styles.card} className="card-7 card-hover">
            <img
    src={freelancerImages["Payal Tiwari"]}
    alt="Payal Tiwari"
    style={styles.image}
  />
            <h2>Payal Tiwari</h2>
            <p>Graphic Designer</p>
            <p>⭐ 4.8 Rating</p>
            <button style={styles.button} onClick={() => goToProfile("Payal Tivari")}>
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "40px 20px",
    textAlign: "center",
  },

  image: {
  width: "95px",
  height: "95px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #1dbf73",
  marginBottom: "15px",
  transition: "0.4s",
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

  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },

  card: {
  width: "260px",
  background: "#fff",
  padding: "30px 20px",
  borderRadius: "18px",
  animation: "floatIn 0.8s ease forwards",
  opacity: 0,
  transform: "translateY(30px)",
  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
  transition: "all .4s ease",
  overflow: "hidden",
  position: "relative",
},

  button: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#1dbf73",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

const styleSheet = document.createElement("style");

styleSheet.innerText = `
@keyframes floatIn{
0%{
opacity:0;
transform:translateY(40px) scale(.9);
}
100%{
opacity:1;
transform:translateY(0) scale(1);
}
}

.card-0{animation-delay:.1s;}
.card-1{animation-delay:.2s;}
.card-2{animation-delay:.3s;}
.card-3{animation-delay:.4s;}
.card-4{animation-delay:.5s;}
.card-5{animation-delay:.6s;}
.card-6{animation-delay:.7s;}
.card-7{animation-delay:.8s;}

.card-hover{
transition:.45s;
}

.card-hover:hover{
transform:translateY(-15px) scale(1.04);
box-shadow:0 20px 40px rgba(0,0,0,.2);
}

.card-hover:hover img{
transform:scale(1.12) rotate(3deg);
border-color:#2563eb;
box-shadow:0 0 25px rgba(37,99,235,.4);
}

img{
transition:.4s;
}

button{
transition:.35s;
font-weight:600;
}

button:hover{
transform:scale(1.08);
box-shadow:0 8px 20px rgba(29,191,115,.45);
background:#17a864;
}

.card-hover::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(120deg,
transparent,
rgba(255,255,255,.6),
transparent);
transition:.8s;
}

.card-hover:hover::before{
left:120%;
}

.container{
animation:pageFade .8s ease;
}

@keyframes pageFade{
from{
opacity:0;
}
to{
opacity:1;
}
}
`;

document.head.appendChild(styleSheet);

export default Freelancers;