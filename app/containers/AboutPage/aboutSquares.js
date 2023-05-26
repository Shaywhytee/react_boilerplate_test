import React, { useContext } from 'react';
import { ContentContext } from '../../utils/content';
import AlexJersey from '../../images/alex_jersey.jpg';
import AlexComputerShot from '../../images/alex_computer_shot.jpg';
import GroupPicture from '../../images/100t.jpg';
import { SlideLeft, SlideRight } from '../../components/Misc/Slide';
import { css } from 'styled-components';

function AboutSquares() {
  const contentData = useContext(ContentContext);
  const textBox1 = contentData.find(item => item.name === 'textBox1');
  const textBox2 = contentData.find(item => item.name === 'textBox2');
  const textBox3 = contentData.find(item => item.name === 'textBox3');
  const pictureBox1 = contentData.find(item => item.name === 'pictureBox1');
  const pictureBox2 = contentData.find(item => item.name === 'pictureBox2');
  const pictureBox3 = contentData.find(item => item.name === 'pictureBox3');

  if (
    !textBox1 ||
    !textBox2 ||
    !textBox3 ||
    !pictureBox1 ||
    !pictureBox2 ||
    !pictureBox3
  ) {
    return null;
  }

  return (
    <div className="squares">
      <SlideRight>
        <div className="about_square">
          <p>This is a bunch of content that you will talk about yourself</p>
          <img src={GroupPicture} className="group_picture" />
        </div>
      </SlideRight>
      <SlideLeft>
        <div className="about_square">
          <img src={AlexComputerShot} className="gaming_picture" />
          <p>This is a bunch of content that you will talk about yourself</p>
        </div>
      </SlideLeft>
      <SlideRight>
        <div className="about_square">
          <p>This is a bunch of content that you will talk about yourself</p>
          <img src={AlexJersey} className="jersey_picture" />
        </div>
      </SlideRight>
  </div>
  )
}

export const AboutSquareStyles = css `
  .squares {
    display: flex;
    flex-direction: column;
    justify-content: space around;
    align-items: center;
    height: 100%;
    width: 100vw;
    background-color: #2D3142;
    padding-top: 20vh;
  }

  .squares .about_square {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    background-color: #3A3E4E;
    text-align: center;
    transition: 0.5s;
    margin: 5vh 3vw;
    color: #C0BEC6;
  }

  .about_square:nth-child(even) {
    align-self: flex-start;
  }

  .about_square:nth-child(odd) {
    align-self: flex-end;
  }

  .about_square p {
    width: 100%;
    font-size: 2rem;
  }

  .squares .about_square .group_picture,
  .squares .about_square .gaming_picture,
  .squares .about_square .jersey_picture {
    width: 30vw;
    transition: 0.5s;
    object-fit: cover;
    object-position: center;
  }

  .squares .about_square img {
    transition: 0.5s;
  }

  .squares .about_square img:hover {
    z-index: 2;
    position: relative;
    transform: scale(1.2);
  }

  @media only screen and (max-width: 750px) {
    .about_container .squares {
      
    }

    .about_container .squares .about_square {
      width: 85vw;
      height: 100%;
      flex-direction: column;
    }

    .about_container .squares .about_square .group_picture,
    .about_container .squares .about_square .gaming_picture,
    .about_container .squares .about_square .jersey_picture{
      width: 100%;
      height: 100%;
    }
  }
`

export default AboutSquares;