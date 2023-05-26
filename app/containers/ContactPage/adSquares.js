import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faShieldCat,
  faFaceLaughSquint,
  faExplosion,
} from '@fortawesome/free-solid-svg-icons';
import { ContentContext } from '../../utils/content';
import { SlideUp } from '../../components/Misc/Slide';
import { css } from "styled-components";

function AdSquares() {

  const contentData = useContext(ContentContext);
  const adSquare1 = contentData.find(item => item.name === 'adSquare1');
  const adSquare2 = contentData.find(item => item.name === 'adSquare2');
  const adSquare3 = contentData.find(item => item.name === 'adSquare3');
  const adSquare4 = contentData.find(item => item.name === 'asSquare4');

  if (
    !adSquare1 ||
    !adSquare2 ||
    !adSquare3 ||
    !adSquare4
  ) {
    return null;
  }

  return (
    <SlideUp>
      <div className="ad_squares">
        <div className="ad_square">
          <FontAwesomeIcon icon={faCat} size="4x" />
          <p>{adSquare1.title}</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faShieldCat} size="4x" />
          <p>{adSquare2.title}</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faFaceLaughSquint} size="4x" />
          <p>{adSquare3.title}</p>
        </div>
        <div className="ad_square">
          <FontAwesomeIcon icon={faExplosion} size="4x" />
          <p>{adSquare4.title}</p>
        </div>
      </div>
    </SlideUp>
  );
};

export const AdSquareStyles = css`
.ad_squares {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  width: 70vw;
  margin-bottom: 5vh;
}

 .ad_squares .ad_square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #C0BEC6;
  height: 20vh;
  width: 10vw;
}

 .ad_squares .ad_square p {
  font-size: 1.7rem;
}
  @media only screen and (max-width: 750px) {

    .ad_squares {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 85vw;
      height: 40vh;
    }
    .ad_squares .ad_square {
      width: 42.5vw;
      height: 20vh;
    }
}
`

export default AdSquares;