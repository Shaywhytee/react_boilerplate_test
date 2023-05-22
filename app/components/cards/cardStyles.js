/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const CardStyles = css`
  .about_container .card {
    display: none; /* Hide all cards by default */
  }

  .about_container .card.active {
    display: block; /* Show active card */
    height: 50vh;
  }

  .about_container .card.active img {
    height: 50vh;
  }

  .about_container .deck_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 60vw;
    background: radial-gradient(
      circle,
      rgba(79, 209, 224, 1) 0%,
      rgba(230, 230, 230, 1) 49%
    );
  }

  .about_container .deck {
    position: relative; /* Ensure cards are positioned relative to the deck */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vh;
    width: 25vw;
  }

  .about_container button {
    font-size: 10rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5vh 5vw;
    width: 3vw;
    transition: 0.5s;
  }

  .about_container button:hover {
    font-size: 15rem;
  }
`;
