import React, { useState } from "react";
import HomePageIntroBg from "../../images/homepage_intro.jpg";
import Logo from "../../images/Biggest.png";
import FadeInView from "../Misc/FadeIn";
import FadeOutView from "../Misc/FadeOut";

function HomeIntro({ onExploreClick }) {
  const [isExplore, setIsExplore] = useState(false);

  const handleExploreClick = () => {
    setIsExplore(true);
    onExploreClick();
  };

  if (isExplore) {
    return (
      <FadeOutView>
      <div className="intro_container">
        <img src={HomePageIntroBg} className="intro_bg" alt="Intro Background" />
        <div className="intro_content">
            <div className="fade_container">
              <img src={Logo} className="logo" alt="Logo" />
              <button type="button" onClick={handleExploreClick}>EXPLORE</button>
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
            <button type="button" onClick={handleExploreClick}>EXPLORE</button>
          </div>
        </FadeInView>
      </div>
  </div>
  );
}

export default HomeIntro;
