import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/authContext';
import { ContentContext } from '../../utils/content';
import AdminDropdown from './adminDropdown';

function NavBar() {
  const { loggedIn, logout } = useContext(AuthContext);
  const { photoUrls } = useContext(ContentContext);

  const Icon = photoUrls[7];

  if (photoUrls.length === 0) {
    return <div>Loading...</div>;
  }

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
            <Link to="/" className="nav_btn">
              Home
            </Link>
            <Link to="/about" className="nav_btn">
              About
            </Link>
            <Link to="/portfolio" className="nav_btn">
              Portfolio
            </Link>
          </div>
          {loggedIn && <AdminDropdown />}
        </div>
        <div className="right_btns">
          <Link to="/contact" className="contact_btn">
            <div className="contact_btn">Contact</div>
          </Link>
          {loggedIn && (
            <button type="button" onClick={handleLogout} className="logout_btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
