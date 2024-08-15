import React, { useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newTestimonial = { id: Date.now(), name, message };
      setTestimonials([...testimonials, newTestimonial]);
      setName(''); // Clear the input fields after submission
      setMessage('');
    }
  };

  return (
    <div className="testimonial-form">
      <h2>Submit a Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="testimonial-form-input"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="testimonial-form-textarea"
          />
        </div>
        <button type="submit" className="testimonial-form-button">
          Submit
        </button>
      </form>
  
      <h3>Testimonials:</h3>
      <ul className="testimonial-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="testimonial-list-item">
            <strong>{testimonial.name}</strong>
            <p>{testimonial.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default Testimonials;
