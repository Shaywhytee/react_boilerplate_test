/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const ContactStyles = css`
  .contact_container {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    background-color: #e6e6e6;
    box-shadow: 0px 5px 30px black;
    border-radius: 0 0 15px 15px;
    margin-bottom: 5vh;
  }

  .contact_container .title_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 30vh;
    width: 100%;
    color: white;
    position: relative;
    overflow: hidden;
  }

  .contact_container .title_container .contact_title_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    opacity: 0.8;
  }

  .contact_container .title_container h1 {
    font-size: 5rem;
    background-color: rgba($color: black, $alpha: 0.3);
    height: 100%;
    width: 100%;
    line-height: 18vh;
    z-index: 1;
  }

  .contact_container .title_container p {
    font-size: 2rem;
    background-color: rgba($color: black, $alpha: 0.3);
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .contact_container .new_clients {
    font-size: 1.7rem;
    height: 5vh;
  }

  .contact_container .ad_squares {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    width: 50vw;
  }

  .contact_container .ad_squares .ad_square {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 5px;
    height: 15vh;
    width: 10vw;
  }

  .contact_container .ad_squares .ad_square p {
    font-size: 1.7rem;
  }

  .contact_container .form_wrapper {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 10vh;
    width: 15vw;
  }

  .contact_container .form_wrapper .form_selection {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 10vh;
    width: 15vw;
  }

  .contact_container .form_wrapper .form_selection button {
    height: 5vh;
    width: 7vw;
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

  .contact_container .form_wrapper .form_selection button:hover {
    border: white;
    color: white;
  }
`;
