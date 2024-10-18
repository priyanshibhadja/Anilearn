import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import UploadVideoComponent from '../uploadvideo/upload'

const Picked = ({ email }) => {
    const [picked, setPicked] = useState([]);
    const [topictime, settime] = useState("");


    const [fileName, setFileName] = useState('Browse Files');
    const [file, setFile] = useState(null);
    const [secure_url, setsecure_url] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const handleUpload = async (topicname, topicdes, suggetioncategory, time, e) => {
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
            const sendvideo = await fetch('http://localhost:3002/videoupload', {
                method: 'POST',
                body: JSON.stringify({ secure_url, email,topicname, topicdes,topictime, suggetioncategory  }), // Spread the 'form' object
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
    }

    useEffect(() => {
        axios.get('http://localhost:3002/fetchpicked')
            .then((response) => {
                setPicked(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>
            <div className='card-container' style={{ display: 'flex', flexDirection: 'column', rowGap: '40px' }}>
                {picked
                    .filter(item => item.Educatoremail === email)
                    .map((item, index) => (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', padding: '10px', height: 'auto', width: '100%', borderRadius: '10px' }} key={index}>
                            <div className='card-header'>
                                <h3 className='card-title' style={{ fontSize: '2em',color:'black' }}>{item.topicname}</h3>
                                <h4>Category: {item.suggetioncategory}</h4>
                                <hr />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{item.topicdes}</p>
                                <br />
                                <h3>Duration of Video</h3>
                                <input type="number" onChange={(e)=>settime(e.target.value)} style={{ width: '97%' }} placeholder="in minutes" />
                                <label htmlFor="custom-file-upload" className="filupp">
                                    <span style={{ color: 'white' }} className="filupp-file-name js-value">{fileName}</span>
                                    <input
                                        type="file"
                                        name="attachment-file"
                                        id="custom-file-upload"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </label>
                                <br />
                                <button onClick={(e) => handleUpload(item.topicname, item.topicdes, item.suggetioncategory, topictime, e)}>Upload video</button>
                            </div>
                        </div>
                    ))}
            </div>

        </>
    );
};

export default Picked;
