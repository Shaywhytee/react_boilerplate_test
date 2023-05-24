/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTwitch,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import Icon from '../../images/Biggest.png';
import { AuthContext } from '../../utils/authContext';

function NavBar() {
  const { loggedIn, logout } = useContext(AuthContext);
  const handleLogout = () => {
    // Perform logout actions
    localStorage.removeItem('token');
    logout();
  };

  return (
    <div className="nav_bg">
      <div className="nav_bar_wrapper">
        <img src={Icon} className="nav_icon_wrapper" alt="icon" />
        <div className="nav_btn_wrapper">
          <div className="nav_user_btns">
            <Link to="/home" className="nav_btn">
              Home
            </Link>
            <Link to="/about" className="nav_btn">
              About
            </Link>
            <Link to="/portfolio" className="nav_btn">
              Portfolio
            </Link>
            <Link to="/contact" className="nav_btn">
              Contact
            </Link>
          </div>
          {loggedIn && (
            <div className="nav_edit_btns">
              <Link
                to="/edit-home" 
                className="nav_btn">
                Edit Home
              </Link>
              <Link
                to="/edit-about" 
                className="nav_btn">
                Edit About
              </Link>
              <Link 
                to="/edit-portfolio" 
                className="nav_btn">
                Edit Portfolio
              </Link>
              <Link 
                to="/edit-contact" 
                className="nav_btn">
                Edit Contact
              </Link>
            </div>
          )}
        </div>
        <div className="nav_socials_wrapper">
          <div
            onClick={() =>
              window.open('https://www.youtube.com/@TheHonestClimb', '_blank')
            }
            className="nav_social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
          <div
            onClick={() =>
              window.open('https://www.twitch.tv/thehonestclimb', '_blank')
            }
            className="nav_social"
          >
            <FontAwesomeIcon icon={faTwitch} size="2x" />
          </div>
          <div
            onClick={() =>
              window.open('https://www.tiktok.com/@thehonestclimb', '_blank')
            }
            className="nav_social"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </div>
        </div>
        {loggedIn && (
          <button type="button" onClick={handleLogout} className="nav_btn">Logout</button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
