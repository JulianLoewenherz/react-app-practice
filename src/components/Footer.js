import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <footer style={{ padding: '1rem', backgroundColor: darkMode ? '#333' : '#eee', color: darkMode ? '#eee' : '#333' }}>
      <div>Current Time: {currentTime.toLocaleTimeString()}</div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </footer>
  );
}

export default Footer;