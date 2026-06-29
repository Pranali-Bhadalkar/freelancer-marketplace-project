import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Freelancers from "./Pages/Freelancers";
import PostJob from "./Pages/PostJob";
import Profile from "./Pages/Profile";
import Services from "./Pages/Services";
import Search from "./Pages/Search";
import Jobs from "./Pages/Jobs";
import FreelancerProfile from "./Pages/FreelancerProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/freelancer" element={<Freelancers />} />
        <Route path="/freelancer/:name" element={<FreelancerProfile />} />

        <Route path="/postjob" element={<PostJob />} />
        <Route path="/services" element={<Services />} />

        <Route path="/search/:query" element={<Search />} />

        <Route path="/jobs" element={<Jobs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;