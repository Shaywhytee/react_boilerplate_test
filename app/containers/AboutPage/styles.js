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

  .about_container .squares .about_square .group_picture,
  .about_container .squares .about_square .gaming_picture,
  .about_container .squares .about_square .jersey_picture {
    height: 25vh;
    width: 20vw;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
    transition: 0.5s;
  }
  .about_container .squares .about_square .group_picture img,
  .about_container .squares .about_square .gaming_picture img,
  .about_container .squares .about_square .jersey_picture img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px 10px white, 0px 0px 10px 2px black;
    transition: 0.5s;
  }

  .about_container .squares .about_square .group_picture img:hover,
  .about_container .squares .about_square .gaming_picture img:hover,
  .about_container .squares .about_square .jersey_picture img:hover {
    box-shadow: inset 0px 0px 10px 15px white, 0px 0px 20px 15px black;
    z-index: 2;
    position: relative;
    transform: scale(1.2);
  }

  @media only screen and (max-width: 500px) {
    .about_container {
      width: 90vw;
      overflow: visible;
    }

    .about_container .squares {
      grid-template-columns: 1fr;
    }

    .about_container .squares .about_square {
      width: 85vw;
      height: 100%;
    }

    .about_container .squares .about_square:nth-child(1) {
      order: 1;
    }
    .about_container .squares .about_square:nth-child(2) {
      order: 2;
    }
    .about_container .squares .about_square:nth-child(3) {
      order: 4;
    }
    .about_container .squares .about_square:nth-child(4) {
      order: 3;
    }
    .about_container .squares .about_square:nth-child(5) {
      order: 5;
    }
    .about_container .squares .about_square:nth-child(6) {
      order: 6;
    }

    .about_container .squares .about_square .group_picture,
    .about_container .squares .about_square .gaming_picture,
    .about_container .squares .about_square .jersey_picture{
      width: 100%;
      height: 100%;
    }
  }
`;
