import React from 'react';
import './About.css';

function AboutSection() {
  return (
    <>
    <div id='about'></div>
    <br /><br />
    <section className="section about"  aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': '520', '--height': '370' }}>
            <img src="images/about.webp" width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
          </div>
          {/* <img src="images/about-shape-1.svg" width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" /> */}
          {/* <img src="images/about-shape-2.svg" width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" /> */}
          <img src="images/about-shape-3.png" width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
        </figure>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
           A new era of education <span className="span">through </span> power of visual learning
          </h2>
          <p className="section-text">
            Explore our website's trusted visual learning videos for students' career development.          </p>
          <ul className="about-list">
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Expert Trainers</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Online visual Learning</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Lifetime Access</span>
            </li>
            {/* <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Lifetime Access</span>
            </li>
            <li className="about-item">
              <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
              <span className="span">Lifetime Access</span>
            </li> */}
          </ul>
          <img src="images/about-shape-4.svg" width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutSection;