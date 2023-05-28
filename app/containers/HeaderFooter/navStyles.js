/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const NavBarStyles = css`
  ${'' /* Nav Bar Styles */}
  .nav_bg {
    position: absolute;
    width: 100vw;
    height: 15vh;
    z-index: 3;
  }

  .nav_bar_wrapper {
    display: flex;
    width: 100vw;
    height: 15vh;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2vh 2vw;
  }

  .nav_icon_wrapper {
    background-size: contain;
    background-repeat: no-repeat;
    width: 10vw;
  }

  .nav_bar_wrapper .nav_btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .nav_btn {
    width: 10vw;
    height: 5vh;
    background: none;
    border: none;
    color: #C0BEC6;
    transition: 0.5s;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .nav_btn:hover {
    color: #3aaee1;
    letter-spacing: 1px;
  }

  .nav_btn_wrapper button {
    width: 10vw;
    height: 5vh;
    background: none;
    border: none;
    color: #C0BEC6;
    transition: 0.5s;
    font-size: 2rem;
    text-decoration: none;
  }

  .nav_btn_wrapper button:hover {
    color: #3aaee1;
    letter-spacing: 1px;
  }

  .contact_btn {
    width: 10vw;
    height: 5vh;
    background: #3aaee1;
    border: none;
    color: #EBE9EC;
    transition: 0.5s;
    font-size: 1.5rem;
    text-decoration: none;
    text-align: center;
    line-height: 5vh;
  }

  .contact_btn:hover {
    background-color: #EBE9EC;
    color: #3aaee1;
    letter-spacing: 1px;
  }

  .nav_bar_wrapper .nav_btn_wrapper .nav_dd {
    width: 30vw;
    height: 5vh;
    background: none;
    border: none;
    color: #C0BEC6;
    transition: 0.5s;
    font-size: 2rem;
    text-decoration: none;
  }
  .nav_bar_wrapper .nav_btn_wrapper .nav_dd:focus {
    color: #3aaee1;
    letter-spacing: 1px;
  }
  .nav_bar_wrapper .nav_btn_wrapper .nav_dd option {
    font-size: 2rem;
    text-align: center;
    background: rgba(45,49,66,0.8);
  }

  @media only screen and (max-width: 750px) {
    .nav_bg {
      position: fixed;
      top: 0;
      height: 10vh;
    }

    .nav_bar_wrapper {
      align-items: flex-start;
      background: rgba(45,49,66,0.8);
      height: 8vh;
    }

    .nav_icon_wrapper {
      width: 15vw;
    }

    .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns {
    }

    .nav_bar_wrapper .nav_btn_wrapper .nav_user_btns .nav_btn {
      font-size: 1.3rem;
      width: 20vw;
      text-align: center;
    }

    .nav_bar_wrapper .contact_btn {
      text-align: center;
      line-height: 5vh;
      min-width: 0px;
    }
  }

`;
