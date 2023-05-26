/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const ContactFormStyles = css`
  ${'' /* Contact Form Styles */}

  .form_container {
    position: fixed;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index 3;
  }

  .form_container form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 90vh;
  }

  .form_container input {
    height: 5vh;
    text-align: center;
    font-size: 2rem;
    background: #2D3142;
    border-bottom0: none;
    color: #EBE9EC;
    transition: 0.5s ease-in-out;
  }

  .form_container textarea {
    height: 40vh;
    text-align: center;
    font-size: 2rem;
    background: #2D3142;
    border: none;
    color: #EBE9EC;
    transition: 0.5s ease-in-out;
  }

  .form_container button {
    height: 5vh;
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
  }

  .form_container .confirmation_wrapper p {
    height: 10vh;
    width: 10vw;
    line-height: 10vh;
    text-align: center;
    border: none;
    color: #EBE9EC;
    font-size: 1.5rem;
    font-weight: 900;
    background: #2D3142;
    transition: 0.5s ease-in-out;
  }

  .form_container .confirmation_wrapper button {
    height: 3vh;
    width: 10vw;
    font-size: 1.5rem;
    font-weight: 900;
    border: none;
    color: #EBE9EC;
    background: #2D3142;
    transition: 0.5s ease-in-out;
  }

  .form_container .confirmation_wrapper button:hover {
    border: solid 2px white;
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
