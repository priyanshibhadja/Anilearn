import React, { useEffect, useState } from 'react';
import Navbar from  '../../Component/Navbar/Navbar'
import axios from 'axios';
import './allsuggetions.css';

const AllSuggestions = ({email}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/fetchsuggetion')
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handlepick = async (topicname, topicdes,suggetioncategory, email) => {
    try {
      const pick = await fetch('http://localhost:3002/picked', {
        method: 'POST',
        body: JSON.stringify({"topicname":topicname, "topicdes":topicdes,"suggetioncategory":suggetioncategory, "Educatoremail":email}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (pick.ok) {
        setSuccessMessage('Your topic has been picked successfully');
        alert(successMessage)
      } else {
        setErrorMessage('Failed to pick topic');
        alert(errorMessage)
      }
    } catch (error) {
      console.error('Error picked topic:', error);
      setErrorMessage('An error occurred while picking your topic');
    }
  }

  return (
    <>
    <Navbar/>
    <div className='card-container' style={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
  {suggestions.map((item, index) => (
    <div className='' style={{display:'flex', flexDirection:'column',padding:'10px',height:'auto', width:'100%',borderRadius:'5px', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 5px'}} key={index}>
      <h2 style={{color:'black'}}>{item.topicname}</h2>
      <h4 style={{color:'#1AB79D'}}>Category: {item.suggetioncategory}</h4>
      <p>{item.topicdes}</p>
      <br />
      <button style={{backgroundColor:'#f8b720',width:'160px'}} onClick={() => handlepick(item.topicname, item.topicdes,item.suggetioncategory, email)}>Pick</button>
    </div>
  ))}
</div>

    </>
  );
};

export default AllSuggestions;
