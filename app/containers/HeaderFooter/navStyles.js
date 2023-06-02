import { css } from 'styled-components';

export const NavBarStyles = css`
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
    color: #c0bec6;
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
    color: #c0bec6;
    transition: 0.5s;
    font-size: 2rem;
    text-decoration: none;
  }

  .nav_btn_wrapper button:hover {
    color: #3aaee1;
    letter-spacing: 1px;
  }

  .right_btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .logout_btn,
  .contact_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 5vh;
    background-color: #6097d0;
    border: none;
    color: #ebe9ec;
    transition: 0.5s;
    font-size: 1.5rem;
    text-decoration: none;
    text-align: center;
  }

  .logout_btn:hover,
  .contact_btn:hover {
    background-color: #ebe9ec;
    color: #3aaee1;
    letter-spacing: 1px;
  }

  .nav_bar_wrapper .nav_btn_wrapper .nav_dd {
    width: 30vw;
    height: 5vh;
    background: none;
    border: none;
    color: #c0bec6;
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
    background: rgba(45, 49, 66, 0.8);
  }

  @media only screen and (max-width: 750px) {
    .nav_bg {
      position: fixed;
      top: 0;
      height: 10vh;
    }

    .nav_bar_wrapper {
      align-items: flex-start;
      background: rgba(45, 49, 66, 0.8);
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

    .right_btns {
      flex-direction: column;
    }

    .right_btns .logout_btn,
    .right_btns .contact_btn {
      width: 20vw;
      min-width: 75px;
      height: 5vh;
    }

    .nav_bar_wrapper .nav_btn_wrapper .nav_dd {
      align-self: flex-start;
      width: 60vw;
    }
  }
`;
