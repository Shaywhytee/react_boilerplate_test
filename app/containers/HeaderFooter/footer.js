/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  faYoutube,
  faTwitch,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import Icon from '../../images/Biggest.png';

function FooterNav() {
  return (
    <div className="footer_bg">
      <div className="footer_wrapper">
        <img src={Icon} className="footer_icon_wrapper" alt="icon" />
        <div className="footer_links_wrapper">
          <div className="footer_btn_wrapper">
            <Link to="/home" className="footer_btn">Home</Link>
            <Link to="/about" className="footer_btn">About</Link>
            <Link to="/portfolio" className="footer_btn">Portfolio</Link>
            <Link to="/contact" className="footer_btn">Contact</Link>
          </div>
          <div className="footer_socials_wrapper">
            <div
              onClick={() =>
                window.open('https://www.youtube.com/@TheHonestClimb', '_blank')
              }
              className="footer_social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
            <div
              onClick={() =>
                window.open('https://www.twitch.tv/thehonestclimb', '_blank')
              }
              className="footer_social"
            >
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </div>
            <div
              onClick={() =>
                window.open('https://www.tiktok.com/@thehonestclimb', '_blank')
              }
              className="footer_social"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </div>
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
