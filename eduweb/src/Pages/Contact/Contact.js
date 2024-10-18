// ContactUsPage.js

import React, { useRef, useState } from 'react';
import './Contact.css';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import emailjs from '@emailjs/browser';

// Import your success image

const ContactUsPage = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e) => {
    console.log(2);
    e.preventDefault();
    // Add logic to handle form submission, like sending data to a server
    emailjs
      .sendForm(process.env.REACT_APP_SER, process.env.REACT_APP_TEMP, form.current, {
        publicKey: process.env.REACT_APP_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    // Clear form after submission
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Reset submitted state after 3 seconds
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ marginTop: '100px' }}>
        <div className="contact-us-container">
          <div className="left-side">
            <img src='/images/2761902.jpg' alt="Success" />
          </div>
          <div className="right-side">
            {!submitted ? (
              <>
                <h1>Contact Us</h1>
                {/* <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                  </div>
                  <button type="submit">Submit</button>
                </form> */}
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="from_name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="from_email" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" />
                  </div>
                  <input type="submit" value="Send" />
                </form>
              </>
            ) : (
              <div className="success-message">
                <p>Thank you for your message!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactUsPage;
