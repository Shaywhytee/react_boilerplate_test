import React, { useContext, useState, useEffect } from 'react';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessage,
  faVideo,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { SlideUp } from '../Misc/Slide';
import { ContentContext } from '../../utils/content';

function Steps({ showHomePage }) {
  const { contentData } = useContext(ContentContext);
  const steps = contentData.find(item => item.name === 'steps');
  const step1 = contentData.find(item => item.name === 'step1');
  const step2 = contentData.find(item => item.name === 'step2');
  const step3 = contentData.find(item => item.name === 'step3');

  const [showSteps, setShowSteps] = useState(false);
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  useEffect(() => {
    let timer;

    if (showHomePage) {
      timer = setTimeout(() => {
        setShowSteps(true);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [showHomePage]);

  useEffect(() => {
    if (showSteps) {
      const timer1 = setTimeout(() => {
        setShowStep1(true);
      }, 1000);

      const timer2 = setTimeout(() => {
        setShowStep2(true);
      }, 2000);

      const timer3 = setTimeout(() => {
        setShowStep3(true);
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [showSteps]);

  if (!steps || !step1 || !step2 || !step3) {
    return null;
  }

  return (
    <div className="steps_wrapper">
      {showHomePage &&
        <>
        {showSteps && (
          <>
          <SlideUp>
            <h1>{steps.title}</h1>
          </SlideUp>
          <div className="steps_options">
                {showStep1 ? (

                  <SlideUp>
                  <div className="step">
                    <h1>{step1.title}</h1>
                    <FontAwesomeIcon
                      icon={faMessage}
                      color="rgba(192, 190, 198,1)"
                      size="4x"
                      />
                  </div>
                </SlideUp>
                ): (
                  <div className='step_filler'></div>
                )}
                {showStep2 ? (
                  <SlideUp>
                    <div className="step">
                      <h1>{step2.title}</h1>
                      <FontAwesomeIcon
                        icon={faVideo}
                        color="rgba(192, 190, 198,1)"
                        size="4x"
                      />
                    </div>
                  </SlideUp>
                ) : (
                  <div className="step_filler" />
                )}
                {showStep3 ? (
                  <SlideUp>
                    <div className="step">
                      <h1>{step3.title}</h1>
                      <FontAwesomeIcon
                        icon={faUpload}
                        color="rgba(192, 190, 198,1)"
                        size="4x"
                      />
                    </div>
                  </SlideUp>
                ) : (
                  <div className="step_filler" />
                )}
          </div>
          </>
          )}
        </>
      }
    </div>
  );
}
export const StepsStyles = css`
  .steps_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    width: 100vw;
    background-color: #2d3142;
    text-align: center;
    padding-bottom: 10vh;
    transition: 1s;
  }

  .steps_wrapper h1 {
    font-size: 3rem;
    color: #c0bec6;
    transition: transform 0.5s ease;
  }

  .steps_wrapper .steps_options {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100vw;
    transition: 0.5s;
  }

  .steps_wrapper .steps_options .step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 21vh;
    width: 15vw;
    transition: 0.5s;
  }
  
  .steps_wrapper .steps_options .step h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3vh;
    color: #c0bec6;
  }
  .steps_wrapper .steps_options .step_filler {
    height: 21vh;
    width: 15vw;
  }

  @media only screen and (max-width: 750px) {
    .steps_wrapper {
      width: 100vw;
    }
    .steps_wrapper h1 {
      font-size: 2rem;
    }

    .steps_wrapper .steps_options {
      width: 100%;
    }
    .steps_wrapper .steps_options .step h1 {
      font-size: 1.3rem;
      min-width: 75px;
    }
  }
`;
export default Steps;
