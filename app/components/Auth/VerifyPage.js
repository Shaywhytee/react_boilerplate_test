/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../utils/authContext';

function AdminLogin() {
  const { loginError, setLoginError, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://honesteditz-back.herokuapp.com/user/verify',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { token } = response.data;
      localStorage.setItem('token', token);
      login(token);
    } catch (error) {
      setLoginError(true);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="page_container" id="login_page">
      <h1>AdminLogin</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        {loginError && <p>Invalid username or password</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default withRouter(AdminLogin);
