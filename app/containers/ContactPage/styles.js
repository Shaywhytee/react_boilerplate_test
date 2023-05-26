/* eslint-disable prettier/prettier */
import { css } from 'styled-components';
import { ContactTitleStyles } from './title';
import { AdSquareStyles } from './adSquares';

export const ContactStyles = css`
  .contact_container {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background-color: #2D3142;
  }

  @media only screen and (max-width: 500px) {
    .contact_container {
      width: 100vw;
      height: 100%;
    }
  }

  ${ContactTitleStyles}
  ${AdSquareStyles}
`;
