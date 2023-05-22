/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const ContactFormStyles = css`
  ${'' /* Contact Form Styles */}

  .contact_container .form_container {
    position: absolute;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: 100%;
  }

  .contact_container .form_container form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 30vh;
  }

  .contact_container .form_container input {
    height: 5vh;
    text-align: center;
    font-size: 2rem;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 2px;
    transition: 0.5s ease-in-out;
  }

  .contact_container .form_container textarea {
    height: 20vh;
    text-align: center;
    font-size: 2rem;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 2px;
    transition: 0.5s ease-in-out;
  }

  .contact_container .form_container button {
    height: 5vh;
    font-size: 2rem;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 2px;
    transition: 0.5s ease-in-out;
  }

  .contact_container .form_container button:hover {
    border: solid 2px white;
    color: white;
  }
  .contact_container .form_container .confirmation_wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }

  .contact_container .form_container .confirmation_wrapper p {
    height: 10vh;
    width: 10vw;
    line-height: 10vh;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 2px;
    transition: 0.5s ease-in-out;
  }

  .contact_container .form_container .confirmation_wrapper button {
    height: 3vh;
    width: 10vw;
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 2px;
    transition: 0.5s ease-in-out;
  }

  .contact_container .form_container .confirmation_wrapper button:hover {
    border: solid 2px white;
    color: white;
  }
`;
