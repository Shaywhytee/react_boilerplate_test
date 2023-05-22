/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

export const PortfolioStyles = css`
  /* Portfolio Styles */
  .portfolio_container {
    display: flex;
    flex-direction: column;
    gap: 12vh;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    margin-bottom: 5vh;
    padding-bottom: 5vh;
    background-color: #e6e6e6;
    box-shadow: 0px 5px 30px black;
    border-radius: 0 0 15px 15px;
    z-index: 1;
    overflow: hidden;
  }

  .portfolio_container .filters {
    display: flex;
    width: 20vw;
    height: 5vh;
  }

  .portfolio_container .filters button {
    width: 5vw;
    min-width: 75px;
    font-size: 1.5rem;
  }

  .portfolio_container .video_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 100%;
  }

  .portfolio_container .video_grid h3 {
    font-size: 2rem;
    width: 30vw;
    height: 7vh;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    line-height: 3vh;
    background-color: aliceblue;
    border: solid grey;
    border-radius: 15px;
  }

  .portfolio_container .video_grid p {
    font-size: 1.5rem;
    width: 30vw;
    height: 7vh;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    background-color: aliceblue;
    border: solid grey;
    border-radius: 15px;
  }
`;
