import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Myvideos({ email }) {

    const [video, setvideo] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3002/fetchupload')
            .then((response) => {
                setvideo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '50px', rowGap: '20px', justifyContent: 'center', marginTop: '50px' }}>
                {
                    video.filter((item) => item.videoemail === email).map((item) => {
                        return (

                            <div class="" style={{ maxWidth: '40rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', borderRadius: '10px', display: 'flex', flexDirection: 'column', padding: '10px', height: 'auto' }}>
                                <video src={item.secure_url} class="card-img-top" controls></video>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontSize: '1.5em', color: 'orange' }}>{item.topicname}</h5>
                                    <p class="card-text">{item.topicdes}</p>
                                    <p class="card-text" style={{ color: 'hsl(170, 75%, 41%)' }}>Duration : {item.topictime} min</p>
                                </div>
                            </div>
                        );
                    })}
            </div>

        </>
    )


}

export default Myvideos;