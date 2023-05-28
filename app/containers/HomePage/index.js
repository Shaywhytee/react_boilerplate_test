import React, { useState, useEffect } from 'react';
import HomeIntro from '../../components/Homepage/HomeIntro';
import Testimonial from './testimonial';
import HeroSection from './heroText';
import Steps from './steps';

function HomePage() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const introCookie = localStorage.getItem('introCookie');
    if (introCookie) {
      setTimeout(() => {
        setShowHomePage(true);
      }, 1000);
    } 
  }, []);

  const handleExploreClick = () => {
    setTimeout(() => {
      setShowHomePage(true);
    }, 1000);
  };

  return (
    <div className="home_container">
      {!showHomePage && <HomeIntro onExploreClick={handleExploreClick} />}
      <HeroSection />
      <Steps showHomePage={showHomePage} />
      <Testimonial />
    </div>
  );
}

export default HomePage;
