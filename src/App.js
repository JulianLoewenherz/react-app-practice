import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';       // Import the Home component
import OurTeam from './components/OurTeam'; // Import the Our Team component
import OurMission from './components/OurMission'; // Import the Our Mission component
import ReachOut from './components/ReachOut'; // Import the Reach Out component
import './App.css';
import Footer from './components/Footer'; 
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/our-mission">Our Mission</Link></li>
            <li><Link to="/reach-out">Reach Out</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Renders Home component at the root path */}
          <Route path="/our-team" element={<OurTeam />} /> {/* Renders Our Team component at /our-team */}
          <Route path="/our-mission" element={<OurMission />} /> {/* Renders Our Mission component at /our-mission */}
          <Route path="/reach-out" element={<ReachOut />} /> {/* Renders Reach Out component at /reach-out */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
