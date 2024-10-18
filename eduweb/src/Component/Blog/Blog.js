import React from 'react';
import './Blog.css';

function BlogSection() {
  return (
    <section className="section blog has-bg-image" id="blog" aria-label="blog"
      style={{ backgroundImage: `url('images/blog-bg.svg')` }}>
      <div className="container">
        <p className="section-subtitle">Latest Videos</p>
        <h2 className="h2 section-title">Get updated With AniLearn</h2>
        <ul className="grid-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder has-after" style={{ '--width': '370', '--height': '370' }}>
                <img src="images/blog-1.jpg" width="370" height="370" loading="lazy"
                  alt="Become A Better Blogger: Content Planning" className="img-cover" />
              </figure>
              <div className="card-content">
                <a href="#" className="card-btn" aria-label="read more">
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
                <a href="#" className="card-subtitle">Online</a>
                <h3 className="h3">
                  <a href="#" className="card-title">Learn complete React.JS in just 6 hours!</a>
                </h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                    <span className="span">Oct 10, 2021</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                    <span className="span">Com 09</span>
                  </li>
                </ul>
                {/* <p className="card-text">
                  Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                </p> */}
              </div>
            </div>
          </li>
          <li>
          <div className="blog-card">

            <figure className="card-banner img-holder has-after" style={{width: "370",height: "370"}}>
              <img src="images/blog-2.jpg" width="370" height="370" loading="lazy"
                alt="Become A Better Blogger: Content Planning" className="img-cover"/>
            </figure>

            <div className="card-content">

              <a href="#" className="card-btn" aria-label="read more">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>

              <a href="#" className="card-subtitle">Online</a>

              <h3 className="h3">
                <a href="#" className="card-title">Learn complete Docker in just 6 hours!</a>
              </h3>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                  <span className="span">Oct 10, 2021</span>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                  <span className="span">Com 09</span>
                </li>

              </ul>

              {/* <p className="card-text">
                Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
              </p> */}

            </div>

          </div>
        </li>

        <li>
          <div className="blog-card">

            <figure className="card-banner img-holder has-after"  style={{width: "370",height: "370"}}>
              <img src="images/blog-3.jpg" width="370" height="370" loading="lazy"
                alt="Become A Better Blogger: Content Planning" className="img-cover"/>
            </figure>

            <div className="card-content">

              <a href="#" className="card-btn" aria-label="read more">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>

              <a href="#" className="card-subtitle">Online</a>

              <h3 className="h3">
                <a href="#" className="card-title">Learn complete MongoDB in just 6 hours!</a>
              </h3>

              <ul className="card-meta-list">

                <li className="card-meta-item">
                  <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                  <span className="span">Oct 10, 2021</span>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>

                  <span className="span">Com 09</span>
                </li>

              </ul>

              {/* <p className="card-text">
                Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
              </p> */}

            </div>

          </div>
        </li>
        </ul>
        <img src="images/blog-shape.png" width="186" height="186" loading="lazy" alt=""
          className="shape blog-shape" />
      </div>
    </section>
  );
}

export default BlogSection;