import React from 'react';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Footer from './Footer';
import Skills from './Skills';

function Home() {

  return (
    <>
      <HeroSection />
      <Skills/>
      <Cards/>
      <Footer/>
    </>
    
  );
}

export default Home