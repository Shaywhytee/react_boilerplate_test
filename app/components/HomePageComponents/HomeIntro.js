import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FadeInView from '../Misc/FadeIn';
import FadeOutView from '../Misc/FadeOut';
import LoadingSpinner from '../Misc/loadingSpinner';
import { ContentContext } from '../../utils/content';

HomeIntro.propTypes = {
  onExploreClick: PropTypes.node.isRequired,
};

function HomeIntro({ onExploreClick }) {
  const [isExplore, setIsExplore] = useState(false);
  const [hasIntroPlayed, setHasIntroPlayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const introCookie = localStorage.getItem('introCookie');
    if (introCookie) {
      setHasIntroPlayed(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleExploreClick = () => {
    setIsExplore(true);
    localStorage.setItem('introCookie', true);
    onExploreClick();
  };

  const { photoUrls } = useContext(ContentContext);
  const HomePageIntroBg = photoUrls[5];
  const Logo = photoUrls[7];

  if (!HomePageIntroBg || !Logo) {
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (hasIntroPlayed) {
    return <></>;
  }

  if (isExplore) {
    return (
      <FadeOutView>
        <div className="intro_container">
          <img
            src={HomePageIntroBg}
            className="intro_bg"
            alt="Intro Background"
          />
          <div className="intro_content">
            <div className="fade_container">
              <img src={Logo} className="logo" alt="Logo" />
              <button type="button" onClick={handleExploreClick}>
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </FadeOutView>
    );
  }

  return (
    <div className="intro_container">
      <img src={HomePageIntroBg} className="intro_bg" alt="Intro Background" />
      <div className="intro_content">
        <FadeInView>
          <div className="fade_container">
            <img src={Logo} className="logo" alt="Logo" />
            <button type="button" onClick={handleExploreClick}>
              EXPLORE
            </button>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}

export default HomeIntro;
