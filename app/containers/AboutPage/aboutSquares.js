import React, { useContext } from 'react';
import { css } from 'styled-components';
import { ContentContext } from '../../utils/content';
import { SlideLeft, SlideRight } from '../../components/Misc/Slide';

function AboutSquares() {
  const { contentData, photoUrls } = useContext(ContentContext);

  if (contentData.length === 0 || photoUrls.length === 0) {
    return <div>Loading...</div>;
  }
  const textBox1 = contentData.find(item => item.name === 'textbox1');
  const textBox2 = contentData.find(item => item.name === 'textbox2');
  const textBox3 = contentData.find(item => item.name === 'textbox3');
  const pictureBox1 = photoUrls[8];
  const pictureBox2 = photoUrls[9];
  const pictureBox3 = photoUrls[10];
  console.log(photoUrls);

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
          <h1>{textBox1.title}</h1>
          <p>{textBox1.content}</p>
          <img src={pictureBox1} className="group_picture" />
        </div>
      </SlideRight>
      <SlideLeft>
        <div className="about_square">
          <img src={pictureBox2} className="gaming_picture" />
          <p>{textBox2.content}</p>
          <h1>{textBox2.title}</h1>
        </div>
      </SlideLeft>
      <SlideRight>
        <div className="about_square">
          <h1>{textBox3.title}</h1>
          <p>{textBox3.content}</p>
          <img src={pictureBox3} className="jersey_picture" />
        </div>
      </SlideRight>
    </div>
  );
}

export const AboutSquareStyles = css`
  .squares {
    display: flex;
    flex-direction: column;
    justify-content: space around;
    align-items: center;
    height: 100%;
    width: 100vw;
    background-color: #2d3142;
    padding-top: 20vh;
  }

  .squares .about_square {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    background-color: #3a3e4e;
    text-align: center;
    transition: 0.5s;
    margin: 5vh 3vw;
    color: #c0bec6;
  }

  .about_square:nth-child(even) {
    align-self: flex-start;
  }

  .about_square:nth-child(odd) {
    align-self: flex-end;
  }

  .about_square h1 {
    width: 15vw;
    min-width: 100px;
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

    .about_square h1 {
      width: 40vw;
    }
    .about_square p {
      padding: 5vh 0;
    }

    .about_container .squares .about_square .group_picture,
    .about_container .squares .about_square .gaming_picture,
    .about_container .squares .about_square .jersey_picture {
      width: 100%;
      height: 100%;
    }
  }
`;

export default AboutSquares;
