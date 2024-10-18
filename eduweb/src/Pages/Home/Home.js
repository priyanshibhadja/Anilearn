import React from 'react'
import State from '../../Component/State/State';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import Hero from '../../Component/Hero/Hero';
import Category from '../../Component/Category/Category';
import Blog from '../../Component/Blog/Blog';
import About from '../../Component/About/About';
import Cources from '../../Component/Cources/Cources';
import FaqsCard from '../../Component/FAQ/Faq';


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <About />
      <Cources />
      <State />
      {/* <Blog /> */}
      <FaqsCard/>
      <Footer />
    </>
  )
}

export default Home;
