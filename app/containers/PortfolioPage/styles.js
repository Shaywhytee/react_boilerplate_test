/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const PortfolioStyles = css`
  /* Portfolio Styles */
  .portfolio_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: 15vh 0;
    background-color: #2D3142;
    overflow: hidden;
  }
  
  .portfolio_container button {
    background: none;
    border: none;
    font-size: 2rem;
    color: #C0BEC6;
  }

  .portfolio_container .active {
    color: #70B8FF;
  }

  .portfolio_container .filters {
    display: flex;
    width: 45vw;
    height: 7vh;
    align-self: flex-end;

  }

  .portfolio_container .filters select {
    width: 20vw;
    min-width: 150px;
    font-size: 1.5rem;
    background-color: #6097D0;
    border: none;
    margin-left: 2vw;
    text-align: center;
    color: #C0BEC6;
  }

  option {
    min-width: 75px;
    height: 40vh;
    font-size: 1.5rem;
    background-color: #4F75A1;
    text-align: center;
  }

  .portfolio_container .video_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 100%;
    padding-top: 10vh;
    color: #C0BEC6;
  }

  .portfolio_container .video_grid button {
    color: #2D3142;
  }

  .portfolio_container .video_grid p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 50vw;
    height: 7vh;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    background-color: #4F75A1;
  }
  .portfolio_container .video_grid iframe {
    width: 50vw;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    background-color: #3A3E4E;
  }

  .video_card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 10vh;
    background-color: #474A5A;
  }

  .video_card h3{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 50vw;
    height: 15vh;
    margin: 1vh 1vw;
    padding: 3vh 1vw;
    line-height: 3vh;
    background-color: #4F75A1;
  }

  @media only screen and (max-width: 750px) {
    .portfolio_container {
      width: 100vw;
    }
    .portfolio_container .filters {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      align-self: center;
      width: 40vw;
      height: 25vh;
    }

    .portfolio_container .filters select {
      height: 10vh;
    }

    .portfolio_container .video_grid {
      grid-template-columns: 1fr;
      width: 90vw;
    }

    .video_card{
      margin-bottom: 2vh;
      padding-top: 0;
    }

    .portfolio_container .video_grid p,
    .portfolio_container .video_grid h3 {
      width: 85vw;
      height: 20vh;
    }
    .portfolio_container .video_grid iframe {
      width: 85vw;
      height: 40vh
    }
  }
`;
