/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const FooterStyles = css`
  ${'' /* Footer Stlyes */}

  .footer_bg {
    background: linear-gradient(
      180deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(24, 24, 24, 1) 28%,
      rgba(0, 0, 0, 1) 100%
    );
    width: 100vw;
    height: 25vh;
  }

  .footer_wrapper {
    display: flex;
    width: 70vw;
    height: 25vh;
    justify-content: space-around;
    align-items: center;
    margin-left: 15vw;
    margin-right: 15vw;
  }

  .footer_icon_wrapper {
    width: 10vw;
    height: 10vh;
  }

  .footer_icon_wrapper img {
    width: 10vw;
    height: 10vh;
  }

  .footer_links_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .footer_socials_wrapper {
    display: flex;
    color: #3aaee1;
    text-align: right;
  }

  .footer_social {
    margin-right: 0.5vw;
    margin-bottom: 0.5vh;
    transition: 0.5s;
  }

  .footer_social:hover {
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  .footer_btn_wrapper {
    display: flex;
    justify-content: space-around;
    line-height: 10vh;
  }

  .footer_btn_wrapper button {
    width: 7vw;
    height: 10vh;
    background: none;
    border: none;
    color: white;
    transition: 0.5s;
    font-size: 2rem;
  }

  .footer_btn_wrapper button:hover {
    color: #3aaee1;
    text-shadow: 3px 3px 3px black;
    letter-spacing: 1px;
  }
  .copyright {
    align-self: flex-end;
    color: white;
    margin-bottom: 1vh;
  }
`;
