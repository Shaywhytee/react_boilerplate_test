import React, { useContext} from "react";
import { ContentContext } from '../../utils/content';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { css } from "styled-components";

function HeroSection() {
  const contentData = useContext(ContentContext);
  const heroText = contentData.find(item => item.name === 'heroText');

  if (!heroText) {
    return null;
  }

  return (
  <>
  <div className="hero_text_wrapper">
    <h1>{heroText.title}</h1>
    <p>{heroText.content}</p>
  </div>
  <div className="consoltation_container">
    <h1>Set up a consoltation</h1>
    <Link to="/contact" className="consoltation_btn">
      Here
    </Link>
  </div>
  </>
  )
}

export const HeroSectionStyles = css`
  .hero_text_wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 40vh;
    text-align: center;
    color: #C0BEC6;
    padding: 20vh 2vw;
    z-index: 0;
    background-color: #2D3142;
  }

  .hero_text_wrapper h1 {
    z-index: 1;
    font-size: 3rem;
  }

  .hero_text_wrapper p {
    z-index: 1;
    font-size: 1.5rem;
  }

  .consoltation_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #474A5A;
    height: 10vh;
    width: 100vw;
    padding: 10vh 0;
  }
  .consoltation_container h1 {
    color: #C0BEC6;
  }

  .consoltation_btn {
    height: 5vh;
    width: 10vw;
    min-width: 100px;
    background: none;
    border: solid #C0BEC6;
    color: #C0BEC6;
    transition: 0.5s;
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    line-height: 4vh;
  }

  .consoltation_btn:hover {
    letter-spacing: .5vw;
    color: #70B8FF;
    border: solid #70B8FF;
  }

  @media only screen and (max-width: 750px) {
    .hero_text_wrapper {
      height: 40vh;
    }
    .hero_text_wrapper p {
      margin-left: 4vw;
      margin-right: 4vw;
    }

    .contact_btn {
      width: 20vw;
      min-width: 100px;
      height: 5vh;
      line-height: 2vh;
    }
  }
`
export default HeroSection;