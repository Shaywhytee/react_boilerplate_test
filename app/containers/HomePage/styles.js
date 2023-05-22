/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const HomePageStyles = css`
  ${'' /* Home Page Styles */}
  .home_container {
    display: flex;
    flex-direction: column;
    gap: 12vh;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    background-color: #e6e6e6;
    box-shadow: 0px 5px 30px black;
    border-radius: 0 0 15px 15px;
    margin-bottom: 5vh;
  }

  .home_container .hero_text_wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50vw;
    height: 30vh;
    margin-top: 12vh;
    margin-bottom: 15vh;
    text-align: center;
    color: white;
    text-shadow: black 1px 0 10px;
    box-shadow: 10px 5px 5px black, inset -5px -5px 10px black;
    border-radius: 15px;
    padding: 2vh 2vw;
    z-index: 0;
  }

  .home_container .hero_text_wrapper img {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 0;
    border-radius: 15px;
  }

  .home_container .hero_text_wrapper h1 {
    z-index: 1;
    font-size: 3rem;
  }

  .home_container .hero_text_wrapper h2 {
    z-index: 1;
    font-size: 2rem;
  }

  .home_container .hero_text_wrapper p {
    z-index: 1;
    font-size: 1.5rem;
  }

  .home_container .contact_btn {
    width: 10vw;
    height: 5vh;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 3px;
    transition: 0.5s;
    font-size: 1.5rem;
    font-weight: 900;
  }

  .home_container .contact_btn:hover {
    box-shadow: 10px 5px 5px grey;
    color: white;
  }

  .home_container .video_sample {
    text-align: center;
  }

  .home_container .video_sample h1 {
    margin-bottom: 1vh;
  }

  .home_container .video_sample iframe {
    box-shadow: 10px 5px 5px black;
    border-radius: 15px;
  }

  .home_container .steps_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30vh;
    width: 50vw;
    margin-bottom: 5vh;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(24, 24, 24, 1) 28%,
      rgba(0, 0, 0, 1) 100%
    );
    border: solid darkslategrey;
    border-radius: 15px;
    box-shadow: 10px 5px 5px black;
  }

  .home_container .steps_wrapper h1 {
    font-size: 3rem;
    color: white;
  }

  .home_container .steps_wrapper .steps_options {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home_container .steps_wrapper .steps_options .step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 10px 5px 5px black, inset 0 0 10px white;
    border-radius: 10px;
    border: solid 5px;
    height: 20vh;
    width: 15vw;
  }

  .home_container .steps_wrapper .steps_options .step h1 {
    font-size: 2rem;
    font-weight: 900;
    color: rgba(55, 55, 55, 1);
    margin-bottom: 3vh;
  }
`;
