/* eslint-disable react/prop-types */
import React from 'react';
import { css } from 'styled-components';

const Alert = ({ message, onClose }) => (
  <div className="alert">
    <div className="alert-content">
      <p>{message}</p>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default Alert;

export const AlertStyle = css`
  .alert {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 4;
  }

  .alert-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .alert-content p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 30vw;
    text-align: center;
    border: none;
    color: #ebe9ec;
    font-size: 1.5rem;
    font-weight: 900;
    background: #474a5a;
    transition: 0.5s ease-in-out;
    margin: 0;
  }

  .alert-content button {
    height: 5vh;
    width: 30vw;
    border: solid #616271;
    font-size: 1.5rem;
    font-weight: 900;
    color: #ebe9ec;
    background: #474a5a;
    transition: 0.5s ease-in-out;
    margin: 0;
  }

  .alert-content button:hover {
    border: solid 2px white;
    background-color: #70b8ff;
    color: white;
  }
`;
