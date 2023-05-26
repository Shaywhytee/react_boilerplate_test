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
    width: 100vw;
    background-color: #3E5372;
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
  @media only screen and (max-width: 500px) {
    .about_container .deck_wrapper .deck {
      flex-grow: 1;
    }
    .about_container .deck_wrapper .prev_button {
      height: 50px;
      flex-basis: 50%;
      align-self: flex-end
    }
    .about_container .deck_wrapper .next_button {
      height: 50px;
      flex-basis: 50%;
      align-self: flex-end
    }
    .about_container .deck_wrapper {
      padding-bottom: 30vh;
      height: 90vh;
    }
  }
`;
