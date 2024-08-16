import React from 'react';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <h1>Welcome to Our Company</h1>
      <p>This is the homepage of our awesome company. We strive to be the best in our industry.</p>
      <Testimonials /> {/* Add the Testimonials component here */}
    </div>
  );
}

export default Home;

