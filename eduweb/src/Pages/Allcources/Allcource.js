import React, { useState, useEffect } from 'react'
import { Container } from './Allcourcecss';
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../Component/Sidebar/Sidebar';
import Search from '../../Component/search/search';
import './Allcources.css'
import Navbar from '../../Component/Navbar/Navbar'
import Cources from '../../Component/Cources/Cources'
import { useNavigate } from 'react-router';
import axios from 'axios'
import Footer from '../../Component/Footer/Footer';


const Header = () => {
  const [sidebar, setSidebar] = useState(true)
  const Nevigate = useNavigate();
  const showSiderbar = () => setSidebar(!sidebar)

  const [courses, setcourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:3002/fetchcourses')
      .then((response) => {
        setcourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function navigateOneCourse(courseTitle) {
    navigate('/gotocourse', {
      state: {
        courseTitle,
      }
    });
  }

  const filteredcourses = courses.filter((item) => {
    if (item.coursetitle) {
      return item.coursetitle.toLowerCase().includes(searchQuery.toLowerCase()) || item.coursecategory.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false; // Return false if item.resname is undefined
  });

  return (
    <>
      <Navbar></Navbar>
      <div className="container" style={{ marginTop: '100px' }}>

        {/* <p className="section-subtitle">Popular Courses</p> */}

        <h2 className="h2 section-title">Pick A Course To Get Started</h2>

     
      </div>
      <div className='allcources'>



        <div className='All_courses' >

          <div className='search' style={{ display: 'flex', justifyContent: 'center',marginTop:'50px' }}>
            <div className="search_box">
              <input type="text" className="input_search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Which cource are you looking for?" />
              <div className="search_btn" ><i className="fas fa-search"></i></div>
            </div>
          </div>

          <section className=" course" style={{ backgroundColor: 'white' }} id="" aria-label="course">
            <div className="container">

              {/* <p className="section-subtitle">Popular Courses</p> */}

              {/* <h2 className="h2 section-title">Pick A Course To Get Started</h2> */}

              <ul className="grid-list">

                {filteredcourses.map((item, index) => (

                  <li style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px' }}>
                    <div className="course-card" onClick={() => navigateOneCourse(item.coursetitle)}>

                      <figure className="card-banner img-holder" style={{ height: "auto" }}>
                        <img src={item.thumbnail_url} loading="lazy" style={{height:'auto'}}
                          alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
                      </figure>

                      <div className="abs-badge">
                        <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                        <span className="span">{item.courseduration} hours</span>
                      </div>

                      <div className="card-content">

                        <span className="badge">{item.courselevel}</span>

                        <h3 className="h3">
                          <a className="card-title">{item.coursetitle}</a>
                        </h3>

                        <div className="wrapper">

                        </div>

                        <data className="price" value="29">₹{item.courseprice} only</data>

                        <ul className="card-meta-list">

                          <li className="card-meta-item">
                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                            <span className="span">{item.coursevideocount} videos</span>
                          </li>

                        </ul>

                      </div>

                    </div>
                  </li>
                ))}


              </ul>

              {/* <a href="/cource" className="btn has-before">
                <span className="span">Browse more courses</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a> */}

            </div>
          </section>


        </div>
      </div>
    </>
  )
}

export default Header;