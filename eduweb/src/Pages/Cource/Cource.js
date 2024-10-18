import React, { useEffect, useState } from 'react';
import Card from '../../Component/Cource_One_Video/Cource_One_Video';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import './Cource.css';
import axios from 'axios';

const Cource = () => {
    const location = useLocation(); // Initialize useLocation to get navigation state
    const [onecourses, setonecourses] = useState([]);
    const [category, setcategory] = useState("");
    const [courseTitle, setCourseTitle] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3002/fetchcourses')
            .then((response) => {
                setonecourses(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (location.state && location.state.courseTitle) {
            setCourseTitle(location.state.courseTitle);
        }
    }, [location.state]);

    useEffect(() => {
        const filteredCourse = onecourses.find(item => item.coursetitle === courseTitle);
        if (filteredCourse) {
            setcategory(filteredCourse.coursecategory);
        }
    }, [courseTitle, onecourses]);

    return ([
        <div>
            <Navbar></Navbar>
            <div>

                {onecourses.filter((item) => item.coursetitle == courseTitle).map((item) => (

                    <div className='content_course'>
                        <div className='left'>
                            <h1 style={{ color: 'black', borderRadius: '10px', width: '100%', padding: '10px' }}>{courseTitle}</h1>
                            <hr />
                            <div className='desc' >
                                {item.coursedes}
                            </div>
                            {/* STATS */}
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-120px' }}>
                                <section className="section stats" aria-label="stats">
                                    <div className="container">
                                        <ul className="grid-list">
                                            <li>
                                                <div className="stats-card" style={{ height: '130px', width: '180px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px', color: 'hsl(170, 75%, 41%)' }} >{item.courseduration} hours</h3>
                                                    <p className="card-text">Duration</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="stats-card" style={{ height: '130px', width: '130px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px', color: '#ec4c64' }}>{item.coursevideocount}</h3>
                                                    <p className="card-text">Videos</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="stats-card" style={{ height: '130px', width: '180px' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px', color: '#8c54fc' }}>{item.courselevel}</h3>
                                                    <p className="card-text">Level</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="stats-card" style={{ height: '130px', width: 'auto' }}>
                                                    <h3 className="card-title" style={{ fontSize: '30px', color: '#fcb424' }}>₹{item.courseprice}</h3>
                                                    <p className="card-text">Price</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                {/* BUTTON FOR PAYMENT */}
                                <div style={{ marginTop: '-100px' }}>
                                    <button className="btn btn-primary" onClick={() => window.location.href = 'https://rzp.io/l/sY8S6Kh'}>
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <video className="video-player" controls>
                                {/* video url */}
                                <source src={item.secure_url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}



                <div className='all_videoes'>
                    <h2 className='title_heading'>All Videos</h2>
                    <div className='all_cource_video'>
                        {category === "Devops" && (
                            <>
                                <Card
                                    title="What is the primary objective of obtaining an Advanced Certification in Cloud & DevOps?"
                                    h1="1"
                                />
                                <Card
                                    title="What is the relationship between Cloud Computing and DevOps?"
                                    h1="2"
                                />
                                <Card
                                    title="What are some common cloud platforms used in DevOps practices?"
                                    h1="3"
                                />
                                <Card
                                    title="How do they facilitate continuous integration and deployment (CI/CD) pipelines?"
                                    h1="4"
                                />
                                <Card
                                    title="What is the concept of Infrastructure as Code (IaC) in the context of DevOps?"
                                    h1="5"
                                />
                                <Card
                                    title="What are the differences between Docker and Kubernetes?"
                                    h1="6"
                                />
                            </>
                        )}
                        {category === "Cyber Security" && (
                            <>
                                <Card
                                    title="What is the primary goal of completing an Advanced Executive Program in Cybersecurity?"
                                    h1="1"
                                />
                                <Card
                                    title="What is the correlation between executive leadership and cybersecurity?"
                                    h1="2"
                                />
                                <Card
                                    title="What are the latest trends and technologies in cybersecurity that executives need to be aware of?"
                                    h1="3"
                                />
                                <Card
                                    title="What are the main challenges faced by executives in implementing effective cybersecurity measures?"
                                    h1="4"
                                />
                                <Card
                                    title="What are some advanced strategies for managing cybersecurity risks and ensuring organizational resilience?"
                                    h1="5"
                                />
                                <Card
                                    title="How does this program help executives implement these strategies effectively?"
                                    h1="6"
                                />
                            </>
                        )}
                        {category === "Development" && (
                            <>
                                <Card
                                    title="What are the key benefits of completing a course in ReactJS?"
                                    h1="1"
                                />
                                <Card
                                    title="How does ReactJS differ from traditional JavaScript frameworks?"
                                    h1="2"
                                />
                                <Card
                                    title="What advantages does it offer in modern web development?"
                                    h1="3"
                                />
                                <Card
                                    title="What are some fundamental concepts in ReactJS, such as components, state, and props?"
                                    h1="4"
                                />
                                <Card
                                    title="What are some advanced topics in ReactJS, such as Redux for state management, Hooks?"
                                    h1="5"
                                />
                                <Card
                                    title="How can one optimize React applications for performance?"
                                    h1="6"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer></Footer>
        </div>
    ])
}
export default Cource;