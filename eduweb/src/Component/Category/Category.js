import React from 'react';
import './Category.css';

function CategorySection() {
    return (
        <div className='category_container'>
            <section className="section category" aria-label="category">
                <div className="container">
                    <p className="section-subtitle">Categories</p>
                    <h2 className="h2 section-title">
                        Online<span className="span">Visual</span> Learning classes for remote Learning.
                    </h2>
                    <p className="section-text">
                       search for cources and emerging topics
                    </p>
                    <ul className="grid-list">
                        <li>
                            <div className="category-card" style={{ backgroundColor: 'hsl(170, 75%, 91%)' }}>
                                <div className="card-icon" style={{ backgroundColor: 'hsl(170, 75%, 81%)' }}>
                                    <img src="/images/app-development.png" width="40" height="40" loading="lazy" alt="Online Degree Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title">Development</a>
                                </h3>
                                {/* <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p> */}
                                <br/>
                                <span className="card-badge" style={{ backgroundColor: 'hsl(170, 75%, 81%)', color: 'hsl(170, 75%, 41%)' }}>1 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{ backgroundColor: 'hsl(351, 83%, 91%)' }}>
                                <div className="card-icon" style={{ backgroundColor: 'hsl(351, 83%, 81%)' }}>
                                    <img src="images/cyber-security.png" width="40" height="40" loading="lazy" alt="Non-Degree Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title">Cyber Security</a>
                                </h3>
                                {/* <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p> */}
                                <br/>
                                <span className="card-badge" style={{ backgroundColor: 'hsl(351, 83%, 85%)', color: 'hsl(351, 83%, 61%)' }}>1 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{ backgroundColor: 'hsl(229, 75%, 91%)' }}>
                                <div className="card-icon" style={{ backgroundColor: 'hsl(229, 75%, 81%)' }} >
                                    <img src="images/infinity.png" width="40" height="40" loading="lazy" alt="Off-Campus Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title">Devops</a>
                                </h3>
                                {/* <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p> */}
                                <br/>
                                <span className="card-badge" style={{ backgroundColor: 'hsl(229, 75%, 85%)', color: 'hsl(229, 75%, 61%)' }}>1 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{ backgroundColor: 'hsl(42, 94%, 91%)' }}>
                                <div className="card-icon" style={{ backgroundColor: 'hsl(42, 94%, 81%)' }}>
                                    <img src="images/datascience.png" width="40" height="40" loading="lazy" alt="Hybrid Distance Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title">Data Science</a>
                                </h3>
                                {/* <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p> */}
                                <br/>
                                <span className="card-badge" style={{ backgroundColor: 'hsl(42, 94%, 85%)', color: 'hsl(42, 94%, 51%)' }}>0 Courses</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default CategorySection;