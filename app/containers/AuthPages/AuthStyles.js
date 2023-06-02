import { css } from 'styled-components';

export const AuthPagesStyles = css`
  .page_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100%;
    min-height: 40vh;
    background-color: #2d3142;
    margin-bottom: 5vh;
    padding-top: 20vh;
    padding-bottom: 10vh;
  }

  #login_page {
    margin-bottom: 0;
    height: 75vh;
  }

  .page_container h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
    height: 5vh;
    background: #3a3e4e;
    color: #c0bec6;
  }
  .page_container form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100%;
    padding: 5vh 0;
    background: #474a5a;
  }

  .page_container label {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #c0bec6;
  }

  .page_container input {
    width: 25vw;
    height: 7vh;
    background: #3a3e4e;
    color: #c0bec6;
    text-align: center;
    font-size: 1.5rem;
    border: solid #2d3142;
  }

  .page_container textarea {
    width: 20vw;
    height: 20vh;
    background: #3a3e4e;
    color: #c0bec6;
    text-align: center;
    font-size: 1.3rem;
    border: solid #2d3142;
  }

  .page_container button {
    width: 10vw;
    height: 5vh;
    background: #70b8ff;
  }
  .portfolio_container .video_grid button {
    width: 10vw;
    height: 5vh;
    background: #70b8ff;
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
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    width: 60vw;
    background-color: #2d3142;
  }
  .portfolio_container .video_grid .form_wrapper .edit_form input {
    height: 5vh;
    width: 25vw;
    color: #c0bec6;
    background: #3a3e4e;
    border: solid #2d3142;
  }
  .portfolio_container .video_grid .form_wrapper .edit_form textarea {
    height: 20vh;
    width: 25vw;
    color: #c0bec6;
    background: #3a3e4e;
    border: solid #2d3142;
    font-size: 1.5rem;
  }

  .portfolio_container .video_grid .form_wrapper .edit_form .video_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    width: 25vw;
  }
  .portfolio_container .video_grid .form_wrapper .edit_form .video_info h1 {
    width: 25vw;
  }

  .portfolio_container .video_grid .form_wrapper .edit_form .video_info p {
    width: 25vw;
    height: 15vh;
  }

  .portfolio_container .video_grid .form_wrapper .edit_form .video_edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 25vw;
  }
  @media only screen and (max-width: 1000px) {
    .page_container form {
      flex-direction: column;
    }
    .page_container label,
    .page_container input,
    .page_container textarea {
      width: 80vw;
    }
    .page_container h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    .page_container button {
      width: 30vw;
    }
    .portfolio_container .video_grid button {
      width: 20vw;
      height: 5vh;
      background: #70b8ff;
    }
  }
`;
