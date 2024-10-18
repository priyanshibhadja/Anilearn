import React from 'react';
import './Cource_One_Video.css';
const Card = ({ title, description, h1 }) => {
    return (
        <div >
            <a
                href="https://rzp.io/l/sY8S6Kh"
                className="card"
                style={{padding:'10px'}}
            >
                {/* <img src={imageUrl} alt="" className="image"
                /> */}
                <h2 style={{color:'#ec4c64', fontSize:'75px', opacity:'0.6'}}>{h1}</h2>
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <p className='time'>Time: 2 Hour</p>
                </div>
            </a>
        </div>
    );
};

export default Card;
