import React from 'react';
import './State.css';

function State() {
  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="stats-card" style={{ '--color': '170, 75%, 41%' }}>
              <h3 className="card-title">Step 1</h3>
              <p className="card-text">Login / SignUp</p>
            </div>
          </li>

          <li>
            <div className="stats-card" style={{ '--color': '351, 83%, 61%' }}>
              <h3 className="card-title">Step 2</h3>
              <p className="card-text">Give Suggestions</p>
            </div>
          </li>

          <li>
            <div className="stats-card" style={{ '--color': '260, 100%, 67%' }}>
              <h3 className="card-title">Step 3</h3>
              <p className="card-text">Enjoy learning</p>
            </div>
          </li>

          <li>
            <div className="stats-card" style={{ '--color': '42, 94%, 55%' }}>
              <h3 className="card-title">Step 4</h3>
              <p className="card-text">Dive into Courses</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default State;
