import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Search from '../search/search';
import axios from 'axios'
import Footer from '../Footer/Footer';

function Video() {

    const [video, setvideo] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


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

    const filteredvideo = video.filter((item) => {
        if (item.topicname) {
            return item.topicname.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false; // Return false if item.resname is undefined
    });


    return (
        <>
            <Navbar />
            <div className="container" style={{marginTop:'100px'}}>

                {/* <p className="section-subtitle">Popular Courses</p> */}

                <h2 className="h2 section-title">Choose a video to begin your journey</h2>
               
            </div>
            {/* <Search /> */}

            <div className='search' style={{ display: 'flex', justifyContent: 'center',marginBottom:'-30px',marginTop:'-70px'}}>
                <div className="search_box">
                    <input type="text" className="input_search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Which cource are you looking for?" />
                    <div className="search_btn" ><i className="fas fa-search"></i></div>
                </div>
            </div>
            <br />
            <section className=" course" style={{ backgroundColor: 'white' }} id="" aria-label="course">

            </section>


            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '50px', rowGap: '20px', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                {
                    filteredvideo.map((item) => {
                        return (

                            <>
                                <div className="" style={{ maxWidth: '40rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', borderRadius: '10px', display: 'flex', flexDirection: 'column', padding: '10px', height: 'auto' }}>
                                    <video src={item.secure_url} className="card-img-top" controls></video>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '1.5em', color: 'orange' }}>{item.topicname}</h5>
                                        <p className="card-text">{item.topicdes}</p>
                                        <p className="card-text" style={{ fontWeight: 'bold' }} >Creator : {item.videoemail}</p>
                                        <p className="card-text" style={{ color: '#1AB79D' }}>Duration : {item.topictime} min</p>
                                    </div>
                                </div>
                            </>


                        );
                    })}
            </div>

            <Footer />

        </>
    )


}

export default Video;