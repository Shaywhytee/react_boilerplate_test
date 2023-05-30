/* eslint-disable prettier/prettier */
import { css } from 'styled-components';
import { AboutSquareStyles } from '../../components/AboutPageComponents/aboutSquares';

export const AboutPageStyles = css`
  ${'' /* About page styles */}
  .about_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: #e6e6e6;
    z-index: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 750px) {
    .about_container {
      width: 90vw;
      overflow: visible;
    }
  }

  ${AboutSquareStyles}
`;
