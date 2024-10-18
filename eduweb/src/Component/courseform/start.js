import React, { useEffect, useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import './start.css'
import axios from 'axios';
import Promovideoupload from '../uploadvideo/upload'




function Start({ email }) {
  const [form, setForm] = useState([]);
  const [value, setvalue] = useState([]);
  const [thumbnail, setthumbnail] = useState(null);
  const [thumbnail_url, setthumbnailurl] = useState("");

  const handleform = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }


  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [secure_url, setsecure_url] = useState("");

  const handleFileChange_thubnil = async () => {
    
    const data = new FormData();

    data.append("file", thumbnail);
    data.append('upload_preset', 'images_preset')
    console.log(data);
    try {
      let api = `https://api.cloudinary.com/v1_1/dvy3tlqix/image/upload`;
      const res = await axios.post(api, data);
      console.log(res);
      const { secure_url } = res.data;
      console.log(secure_url);
      setthumbnailurl(secure_url);
      console.log('image upload complete');
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (event) => {
    handleFileChange_thubnil();
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append('upload_preset', 'videoes_preset');
    try {
      const api = `https://api.cloudinary.com/v1_1/dvy3tlqix/video/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      if (!secure_url) { alert('reupload video'); return; }
      console.log(secure_url);
      setsecure_url(secure_url);
      alert("Hello")
      console.log(secure_url);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Helloerror");
    }
    try {
      const sendvideo = await fetch('http://localhost:3002/courseupload', {
        method: 'POST',
        body: JSON.stringify({ secure_url,thumbnail_url, email, ...form }), // Spread the 'form' object
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(sendvideo);
      if (sendvideo.ok) {
        alert('Your video has been sent successfully');
      } else {
        alert('Failed to send video');
      }
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      alert('An error occurred while submitting your suggestion');
    }

  };

  const handleadd = () => {
    const abc = [...value, []]
    setvalue(abc)
  }


  const handlesubmit = async (e) => {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value) {
        isValid = true;
        // Optionally, you can add error messages or styles to indicate the empty field.
        field.style.border = '1px solid red';
      } else {
        // Reset the error styling if the field is not empty.
        field.style.border = '';
      }
    });

    if (isValid) {
      setCurrentActive(prevActive => {
        const newActive = prevActive + 1;
        return newActive > 4 ? 4 : newActive;
      });
    }
  }


  const [currentActive, setCurrentActive] = useState(1);

  // const handleClickNext = () => {
  //   setCurrentActive(prevActive => {
  //     const newActive = prevActive + 1;
  //     return newActive > 4 ? 4 : newActive;
  //   });
  // };

  const handleClickPrev = () => {
    setCurrentActive(prevActive => {
      const newActive = prevActive - 1;
      return newActive < 1 ? 1 : newActive;
    });
  };



  return (
    <div className='start' >
      <div className="container" >
        {/* <p>{JSON.stringify(form)}</p> */}
        {/* <div className="progress-container">
        <div className="progress" style={{ width: `${((currentActive - 1) / 2) * 100}%` }}></div>
        <div className={`circle ${currentActive === 1 ? 'active' : ''}`}>1</div>
        <div className={`circle ${currentActive === 2 ? 'active' : ''}`}>2</div>
        <div className={`circle ${currentActive === 3 ? 'active' : ''}`}>3</div>
      </div> */}
        {currentActive === 1 && (
          <form action="#" className="form" >
            <h1>Enter Your Course Details </h1>

            {/* <div className="input-box">
            <div className="column">
              <div className="input-box">
                <h3>First Name</h3>
                <input type="text" name='first' placeholder="Enter your first name" onChange={handleForm} required />
              </div>
              <div className="input-box">
                <h3>Last Name</h3>
                <input type="text" name='last' placeholder="Enter your last name" onChange={handleForm} required />
              </div>
            </div>
          </div> */}
            <div className="input-box">
              <h3>Course Title</h3>
              <input type="text" name='coursetitle' onChange={handleform} style={{ width: '97%' }} placeholder="Enter your course title" />
            </div>
            <div className="input-box">
              <h3>Course Description</h3>
              <input type="text" name='coursedes' onChange={handleform} style={{ width: '97%' }} placeholder="Enter your course description" />
            </div>
            <br />
            <h3>Category of your Course</h3>
            <div className="select-box" >
              <select name='coursecategory' onChange={handleform} style={{ fontSize: '13px' }}>
                <option hidden >Category</option>
                <option value='Devops'>Devops</option>
                <option value='Development'>Development</option>
                <option value='Cyber Security'>Cyber Security</option>
                <option value='Data Science'>Data Science</option>
              </select>
            </div>
            <br />
            <div className="select-box" >
              <select name='courselevel' onChange={handleform} style={{ fontSize: '13px' }}>
                <option hidden >Level of your course</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advance'>Advance</option>
              </select>
            </div>
            <div className="column">
              <div className="input-box">
                <h3>Numbers of videos</h3>
                <input type="number" name='coursevideocount' onChange={handleform} placeholder="Total count of videos" />
              </div>
              <div className="input-box">
                <h3>Duration of the course</h3>
                <input type="number" name='courseduration' onChange={handleform} placeholder="Enter duration in hours" />
              </div>
              <div className="input-box">
                <h3>Prize of your course</h3>
                <input type="number" name='courseprice' onChange={handleform} placeholder="Enter the prize in ₹" required />
              </div>
            </div>
            <br />

            {/* <h1>Details of Your Promo video</h1> */}
            {/* <div className="input-box">
            <h3>Name of your Promo Video</h3>
            <input type="text" name='resname' style={{ width: '97%' }} placeholder="Enter the name of your video"  />
            <br />
            <h3>Video Description</h3>
            <input type="text" name='tagline' style={{ width: '97%' }} placeholder="Enter the description of your promo video" />
            <br />
          </div> */}
            
            <div className='start' >
              
              
              <h3>Upload thumbnail of your course here</h3>
              <label htmlFor="custom-file-upload" className="filupp">
                {/* <span style={{ color: 'white' }} className="filupp-file-name js-value">{fileName}</span> */}
                <input
                  type="file"
                  name="attachment-file"
                  id="custom-file-upload"
                  onChange={(e) => setthumbnail((prev) => e.target.files[0])}
                  required
                />
              </label>
              <br />
              <h3>Upload your promo video here</h3>
              <label htmlFor="custom-file-upload" className="filupp">
                {/* <span style={{ color: 'white' }} className="filupp-file-name js-value">{fileName}</span> */}
                <input
                  type="file"
                  name="attachment-file"
                  id="custom-file-upload"
                  onChange={handleFileChange}
                  required
                />
              </label>
              <button
                style={
                  {
                    backgroundColor: '#1AB79D',
                    paddingInline: '40px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '10px', color: 'white'
                  }} onClick={handleUpload}>Upload</button>
            </div>
          </form>
        )}




        {currentActive === 2 && (
          <form action="#" className="form">
            <h1>Upload all videos</h1>
            {value.map((data, i) => {
              return (
                <div className="input-box" style={{ display: 'flex', columnGap: '20px' }}>
                  <input type="text" name='videoname' style={{ width: '45%' }} placeholder="Enter the name of your video" />
                  {/* <Promovideoupload /> */}
                </div>
              )
            })}
            <br />
            <button onClick={handleadd} style={{ width: 'auto', backgroundColor: 'orange', paddingInline: '16px', borderRadius: '10px' }}>Add video</button>
          </form>
        )}
        <br /><br />
        <div style={{ display: 'flex' }}>
          <button className="btn" id="prev" disabled={currentActive === 1} onClick={handleClickPrev}>Prev</button>
          <button className="btn" id="next" onClick={handlesubmit}>Submit my Course</button>
        </div>
        <br /><br />
      </div>
    </div>
  );
}

export default Start;
