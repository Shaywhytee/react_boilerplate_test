import { css } from 'styled-components';
import { StepsStyles } from '../../components/HomePageComponents/steps';
import { HeroSectionStyles } from '../../components/HomePageComponents/heroText';
import { TestimonialStyles } from '../../components/HomePageComponents/testimonial';

export const HomePageStyles = css`
  .home_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: #e6e6e6;
  }

  .intro_container,
  .intro_container .fade_out {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10vh;
    position: fixed;
    top: 0%;
    right: 0%;
    height: 100vh;
    width: 100vw;
    z-index: 4;
  }

  .intro_container .intro_bg {
    position: absolute;
    object-fit: cover;
    object-position: center;
  }

  .intro_container .intro_content {
    background-color:rgba(45,49,66,0.7);
    width: 100vw;
    height: 100vh;
    z-index: 1;
    }

  .fade_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
    width: 100%;
    height: 100%;
  }

  .fade_container img {
    width: 20vw;
  }

  .fade_container button {
    height: 5vh;
    width: 10vw;
    min-width: 100px;
    background: none;
    border: solid #EBE9EC;
    color: #EBE9EC;
    transition: 0.5s;
  }

  .fade_container button:hover {
    letter-spacing: 0.3vw;
    color: yellow;
    border: solid yellow;
  }

  ${HeroSectionStyles}
  ${StepsStyles}
  ${TestimonialStyles}

  @media only screen and (max-width: 750px) {
    .home_container {
      width: 100vw;
    }
    .fade_container img {
      width: 70vw;
    }
  }

`;
