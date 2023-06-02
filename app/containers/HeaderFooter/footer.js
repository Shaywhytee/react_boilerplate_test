import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  faYoutube,
  faTwitch,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { ContentContext } from '../../utils/content';

function FooterNav() {
  const { photoUrls } = useContext(ContentContext);

  const Icon = photoUrls[7];

  if (photoUrls.length === 0) {
    return <div>Loading...</div>;
  }

  const newLocal = '_blank';
  return (
    <div className="footer_bg">
      <div className="footer_wrapper">
        <img src={Icon} className="footer_icon_wrapper" alt="icon" />
        <div className="footer_links_wrapper">
          <div className="footer_btn_wrapper">
            <Link to="/" className="footer_btn">
              Home
            </Link>
            <Link to="/about" className="footer_btn">
              About
            </Link>
            <Link to="/portfolio" className="footer_btn">
              Portfolio
            </Link>
            <Link to="/contact" className="footer_btn">
              Contact
            </Link>
          </div>
          <div className="footer_socials_wrapper">
            <button
              onClick={() =>
                window.open('https://www.youtube.com/@TheHonestClimb', newLocal)
              }
              className="footer_social"
              type="button"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </button>
            <button
              onClick={() =>
                window.open('https://www.twitch.tv/thehonestclimb', newLocal)
              }
              className="footer_social"
              type="button"
            >
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </button>
            <button
              onClick={() =>
                window.open('https://www.tiktok.com/@thehonestclimb', newLocal)
              }
              className="footer_social"
              type="button"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </button>
          </div>
        </div>
        <div className="copyright">
          <p>©2023 HonestEditz</p>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
