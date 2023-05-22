/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const AboutPageStyles = css`
  ${'' /* About page styles */}
  .about_container {
    display: flex;
    flex-direction: column;
    gap: 12vh;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    height: 100%;
    margin-bottom: 5vh;
    padding-bottom: 5vh;
    background-color: #e6e6e6;
    box-shadow: 0px 5px 30px black;
    border-radius: 0 0 15px 15px;
    z-index: 1;
    overflow: hidden;
  }

  .about_container .squares {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  .about_container .about_square {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 20vw;
    text-align: center;
    background-color: #d6d6d6;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
    transition: 0.5s;
  }

  .about_container .about_square h1 {
    font-size: 3rem;
  }

  .about_container .about_square p {
    width: 11vw;
  }

  .about_container .about_square:hover {
    box-shadow: inset 0px 0px 10px 15px white, 0px 0px 10px 10px black;
    z-index: 1;
    position: relative;
    transform: scale(1.2);
  }

  .about_container .group_picture img,
  .about_container .gaming_picture img,
  .about_container .jersey_picture img {
    height: 100%;
    width: 20vw;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
    transition: 0.5s;
  }

  .about_container .group_picture img:hover,
  .about_container .gaming_picture img:hover,
  .about_container .jersey_picture img:hover {
    box-shadow: inset 0px 0px 10px 15px white, 0px 0px 20px 15px black;
    z-index: 2;
    position: relative;
    transform: scale(1.2);
  }
`;
