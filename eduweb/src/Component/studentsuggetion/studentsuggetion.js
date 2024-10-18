import React, { useState } from 'react';
import '../courseform/start.css';
import Navbar from '../Navbar/Navbar';

const Studentsuggetion = () => {
  const [form, setForm] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.topicname || !form.topicdes) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/suggetion', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Your suggestion has been sent successfully');
      } else {
        setErrorMessage('Failed to send suggestion');
      }
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      setErrorMessage('An error occurred while submitting your suggestion');
    }
  };

  return (
    <>
      <Navbar />
      <div className="start" style={{ display: 'flex', justifyContent: 'center' }}>
        <form action="#" className="form">
          <h1>Suggest any topic</h1>
          <div className="input-box">
            <h3>Title of your topic</h3>
            <input
              onChange={handleForm}
              type="text"
              name="topicname"
              style={{ width: '100%' }}
              placeholder="Write title of your topic"
              required
            />
            <br />
            <h3>Topic Description</h3>
            <input
              onChange={handleForm}
              type="text"
              name="topicdes"
              style={{ width: '100%' }}
              placeholder="Please provide the necessary topic description below."
            />
             <h3>Category of your Suggetion</h3>
            <div className="select-box" >
              <select name='suggetioncategory' onChange={handleForm} style={{fontSize:'13px'}}>
                <option hidden >Category</option>
                <option value='Devops'>Devops</option>
                <option value='Development'>Development</option>
                <option value='Cyber Security'>Cyber Security</option>
                <option value='Data Science'>Data Science</option>
              </select>
            </div>
            <br />
          </div>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: '#1AB79D', paddingInline: '20px', width: '100%', height: '50px', fontWeight: 'bold', borderRadius: '10px' }}
          >
            Send
          </button>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};

export default Studentsuggetion;
