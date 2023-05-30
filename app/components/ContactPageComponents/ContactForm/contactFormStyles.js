/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const ContactFormStyles = css`
  ${'' /* Contact Form Styles */}

  .form_container {
    position: fixed;
    top: 0%;
    right
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index 4;
  }

  .form_container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
  }

  .form_container input {
    height: 5vh;
    width: 80vw;
    text-align: center;
    font-size: 2rem;
    background: #2D3142;
    border-bottom0: none;
    color: #EBE9EC;
    transition: 0.5s ease-in-out;
  }

  .form_container textarea {
    height: 40vh;
    width: 80vw;
    text-align: center;
    font-size: 2rem;
    background: #2D3142;
    border: none;
    color: #EBE9EC;
    transition: 0.5s ease-in-out;
  }

  .form_container button {
    height: 6vh;
    width: 80vw;
    font-size: 2rem;
    background: #2D3142;
    color: #EBE9EC;
    transition: 0.5s ease-in-out;
  }

  .form_container button:hover {
    border: solid 2px white;
    color: white;
  }
  .form_container .confirmation_wrapper {
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

  .form_container .confirmation_wrapper p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 30vw;
    text-align: center;
    border: none;
    color: #EBE9EC;
    font-size: 1.5rem;
    font-weight: 900;
    background: #474A5A;
    transition: 0.5s ease-in-out;
    margin: 0;
  }

  .form_container .confirmation_wrapper button {
    height: 5vh;
    width: 30vw;
    border: solid #616271;
    font-size: 1.5rem;
    font-weight: 900;
    color: #EBE9EC;
    background: #474A5A;
    transition: 0.5s ease-in-out;
    margin: 0;
  }

  .form_container .confirmation_wrapper button:hover {
    border: solid 2px white;
    background-color: #70B8FF;
    color: white;
  }

  @media only screen and (max-width: 750px) {
    .form_container form {
      height: 80vh;
      border: none;
    }
    .form_container textarea {
      height: 60vh;
      border: none;
      color: #EBE9EC;
    }
    .form_container input {
      height: 10vh;
      border: none;
      color: #EBE9EC;
    }
    .form_container button {
      height: 10vh;
    }
  }
`;
