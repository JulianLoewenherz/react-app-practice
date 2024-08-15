import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import OurTeam from './components/OurTeam';
import OurMission from './components/OurMission';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer'; // Import the Footer component

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
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/reach-out" element={<ReachOut />} />
        </Routes>

        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
