import { css } from 'styled-components';

export const CardStyles = css`
  @keyframes press {
    0% {
      transform: scale(1) translate(0, 0);
    }
    50% {
      transform: scale(0.92) translate(10px, 10px);
    }
    to {
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes bounce-in {

    0% {
      transform: scale(0.9) rotate(5deg) translate(-20px, -50px);
      opacity: 0;
      top: 0%;
    }
    25% {
      transform: scale(1) rotate(10deg) translate(-50px, -80px);
      opacity: 0.6;
      top: 0%
    }
    50% {
      transform: rotate(5deg) translate(-20px, -50px);
      opacity: 0.9;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1) rotate(-5deg) translate(20px, -50px);
      opacity: 0.8;
      top: 0%;
    }
    25% {
      transform: scale(0.9) rotate(-10deg) translate(50px, -80px);
      opacity: 0.5;
      top: 0%;
    }
    50% {
      transform: rotate(-6.5deg) translate(20px, -50px);
      opacity: 0.3;
      top: 0%;
    }
    99% {
      transform: rotate(-3.3deg) translate(5px, -10px);
      opacity: 0;
      top: 0%;
    }
    to {
      opacity: 0;
      top: 200%;
    }
  }
  .deck_wrapper .card {
    position: absolute;
    top: 200%;
    left: 20%;
    width: 3vw;
    animation: bounce-out 0.7s ease-in-out;
    z-index: 1;
  }

  .deck_wrapper .card.active {
    position: absolute;
    top: 0%;
    left: 20%;
    animation: bounce-in 0.7s ease-in-out;
    width: 3vw;
    opacity: 1;
    z-index: 2;
  }

  .deck_wrapper .card img {
    width 20vw;
  }

  .deck_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100vw;
    background-color: #3E5372;
    overflow: hidden;
  }

  .deck_wrapper .deck {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 45vh;
    width: 30vw;
  }

  .deck_wrapper .next_button,
  .deck_wrapper .prev_button {
    position: abosolute;
  }

  .deck_wrapper button {
    position: abosolute;
    font-size: 10rem;
    background: none;
    border: none;
    z-index: 3;
    cursor: pointer;
    padding: 5vh 5vw;
    width: 3vw;
    transition: 0.5s;
    -webkit-tap-highlight-color: transparent;
    color: black;
  }

  .deck_wrapper button:hover {
    color: #c0bec6;
  }
  .deck_wrapper button:active {
    animation: press 0.2s ease-in-out;
  }

  @media only screen and (max-width: 750px) {
    .deck_wrapper .deck {
      flex-grow: 1;
      width: 100vw;
    }
    .deck_wrapper .card,
    .deck_wrapper .card.active {
      width: 50vw;
      left: 0%;
    }
    .deck_wrapper .card img,
    .deck_wrapper .card.active img {
      width: 50vw;
    }
    .deck_wrapper .prev_button,
    .deck_wrapper .next_button {
      height: 50px;
      flex-basis: 50%;
      align-self: flex-end;
    }
    .deck_wrapper button:hover {
      color: black;
    }
    .deck_wrapper {
      padding-bottom: 30vh;
      height: 90vh;
    }
  }
`;
