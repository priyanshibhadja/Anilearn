import React from 'react';
import About from '../../Component/About/About';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import FaqsCard from '../../Component/FAQ/Faq';
const Aboutus = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '30px' }}>
                <About />
            </div>
            <div style={{marginTop:'-100px'}}>
            <FaqsCard/>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Aboutus;
