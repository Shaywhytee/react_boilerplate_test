/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const NavBarStyles = css`
  ${'' /* Nav Bar Styles */}
  .nav_bg {
    background: linear-gradient(
      180deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(24, 24, 24, 1) 28%,
      rgba(0, 0, 0, 1) 100%
    );
    width: 100vw;
    height: 15vh;
  }

  .nav_bar_wrapper {
    display: flex;
    width: 70vw;
    height: 15vh;
    justify-content: space-around;
    align-items: center;
    margin-left: 15vw;
    margin-right: 15vw;
  }

  .nav_icon_wrapper {
    background-size: contain;
    background-repeat: no-repeat;
    width: 10vw;
    height: 10vh;
  }

  .nav_socials_wrapper {
    display: flex;
    flex-direction: column;
    color: #3aaee1;
    text-align: right;
  }

  .nav_social {
    margin-right: 0.5vw;
    margin-bottom: 0.5vh;
    transition: 0.5s;
  }

  .nav_social:hover {
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  .nav_bar_wrapper .nav_btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .nav_bar_wrapper .nav_btn_wrapper .nav_edit_btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav_btn {
    width: 10vw;
    height: 5vh;
    background: none;
    border: none;
    color: white;
    transition: 0.5s;
    font-size: 2rem;
    text-decoration: none;
  }

  .nav_btn:hover {
    color: #3aaee1;
    text-shadow: 3px 3px 3px black;
    letter-spacing: 1px;
  }

  .nav_btn_wrapper button {
    width: 10vw;
    height: 5vh;
    background: none;
    border: none;
    color: white;
    transition: 0.5s;
    font-size: 2rem;
    text-decoration: none;
  }

  .nav_btn_wrapper button:hover {
    color: #3aaee1;
    text-shadow: 3px 3px 3px black;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 500px) {
    .nav_bg {
      height: 60vh;
    }

    .nav_bar_wrapper {
      flex-direction: column;
      height: 100%;
      gap: 5vh;
    }

    .nav_icon_wrapper {
      height: 70%;
      width: 70%;
    }

    .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns {
      flex-direction: column;
    }

    .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns .nav_btn {
      font-size: 2rem;
      width: 30vw;
      text-align: center;
    }

    .nav_bar_wrapper .nav_socials_wrapper {
      flex-direction: row;
      width: 70vw;
      height: 15vh;
      justify-content: space-around;
      align-items: center;
    }
  }

`;
