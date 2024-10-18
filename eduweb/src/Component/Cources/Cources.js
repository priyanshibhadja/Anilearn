import React,{useEffect,useState} from 'react';
import './Cources.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cource from '../../Pages/Cource/Cource'

const Cources = () => {

  const [courses, setcourses] = useState([]);
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
  


  return (
    <section className="section course" id="" aria-label="course">
    <div className="container">

      <p className="section-subtitle">Popular Courses</p>

      <h2 className="h2 section-title">Pick A Course To Get Started</h2>

      <ul className="grid-list">

      {courses.map((item,index)=>(

        <li style={{backgroundColor:'white',boxShadow:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
          <div className="course-card" onClick={()=>navigateOneCourse(item.coursetitle)}>

            <figure className="card-banner img-holder" style={{height: "auto"}}>
              <img src={item.thumbnail_url} loading="lazy" style={{height:'auto'}}
                alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">{item.courseduration} hours</span>
            </div>

            <div className="card-content">

              <span className="badge">{item.courselevel}</span>

              <h3 className="h3">
                <a  className="card-title">{item.coursetitle}</a>
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

      <a href="/course" className="btn has-before">
        <span className="span">Browse more courses</span>

        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>

    </div>
  </section>
  );
};

export default Cources;







































{/* <li>
          <div className="course-card">

            <figure className="card-banner img-holder" style={{height: "300px"}}>
              <img src="images/course-2.jpg"  loading="lazy"
                alt="Java Programming Masterclass for Software Developers" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">8 Weeks</span>
            </div>

            <div className="card-content">

              <span className="badge">Advanced</span>

              <h3 className="h3">
                <a href="/cource/java" className="card-title">Mastering Web Development: From Basics to Advanced Techniques</a>
              </h3>

              <div className="wrapper">

               
              </div>

              <data className="price" value="49">$49.00</data>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                  <span className="span">15 Lessons</span>
                </li>

                

              </ul>

            </div>

          </div>
        </li>

        <li>
          <div className="course-card">

            <figure className="card-banner img-holder" style={{height: "300px"}}>
              <img src="images/course-3.jpg" loading="lazy"
                alt="The Complete Camtasia Course for Content Creators" className="img-cover"/>
            </figure>

            <div className="abs-badge">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

              <span className="span">3 Weeks</span>
            </div>

            <div className="card-content">

              <span className="badge">Intermediate</span>

              <h3 className="h3">
                <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
              </h3>

              <div className="wrapper">

               

              </div>

              <data className="price" value="35">$35.00</data>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                  <span className="span">13 Lessons</span>
                </li>

              </ul>

            </div>

          </div>
        </li> */}
