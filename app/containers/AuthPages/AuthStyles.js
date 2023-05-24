/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const AuthPagesStyles = css`
  .page_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    height: 100%;
    min-height: 40vh;
    background-color: #e6e6e6;
    box-shadow: 0px 5px 30px black;
    border-radius: 0 0 15px 15px;
    margin-bottom: 5vh;
  }

  .page_container form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 14vh;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 0px 5px 30px black;
    border-radius: 15px;
  }

  .page_container label {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .page_container input {
    width: 10vw;
    height: 5vh;
  }

  .page_container button {
    width: 10vw;
    height: 5vh;
    background: linear-gradient(
      90deg,
      rgba(58, 174, 225, 1) 0%,
      rgba(95, 205, 254, 1) 47%,
      rgba(58, 174, 225, 1) 100%
    );
    box-shadow: 0px 5px 30px black;
  }
  .portfolio_container .video_grid button {
    width: 10vw;
    height: 5vh;
    background: linear-gradient( 90deg,rgba(58,174,225,1) 0%,rgba(95,205,254,1) 47%,rgba(58,174,225,1) 100% );
    box-shadow: 0px 5px 30px black;
  }
  .portfolio_container .video_grid .form_wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .portfolio_container .video_grid .form_wrapper .edit_form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    width: 50vw;
    background: #e6e6e6;
    border-radius: 15px;
  }
  .portfolio_container .video_grid .form_wrapper .edit_form input{
    height: 5vh;
    width: 25vw;
  }
`;
