import React, { useContext } from 'react';

import { ContentContext } from '../../utils/content';
import { css } from 'styled-components';
import { SlideLeft, SlideRight } from '../../components/Misc/Slide';


function Testimonial() {
  const { contentData, photoUrls } = useContext(ContentContext);

  if (contentData.length === 0 || photoUrls.length === 0) {
    return <div>Loading...</div>;
  }

  const client1 = contentData.find(item => item.name === 'client1');
  const client2 = contentData.find(item => item.name === 'client2');
  const client3 = contentData.find(item => item.name === 'client3');
  const Client1Logo = photoUrls[0];
  const Client2Logo = photoUrls[1];
  const Client3Logo = photoUrls[2];

  if (!client1 || !client2 || !client3 || !Client1Logo || !Client2Logo || !Client3Logo) {
    return null;
  }
  return (
    <div className="experience_container">
      <SlideRight>
        <div className="testimonial_container">
          <div className="testimonial">
            <p>
              {client1.content}
            </p>
          </div>
          <div className="client">
            <img src={Client1Logo} alt="Client 1 Logo" />
            <div className="client_info">
              <h1>{client1.title}</h1>
              <button
                type="button"
                onClick={() =>
                  window.open(`https://www.youtube.com/${client1.link}`, '_blank')
                }
              >
                {client1.link}
              </button>
            </div>
          </div>
        </div>
      </SlideRight>
      <SlideLeft>
        <div className="testimonial_container">
          <div className="client">
            <div className="client_info">
              <h1>{client2.title}</h1>
              <button
                type="button"
                onClick={() =>
                  window.open(`https://www.youtube.com/${client2.link}`, '_blank')
                }
              >
                @1demex1
              </button>
            </div>
            <img src={Client2Logo} alt="Client 2 Logo" />
          </div>
          <div className="testimonial">
            <p>
              {client2.content}
            </p>
          </div>
        </div>
      </SlideLeft>
      <SlideRight>
      <div className="testimonial_container">
          <div className="testimonial">
            <p>
              {client3.content}
            </p>
          </div>
          <div className="client">
            <img src={Client3Logo} alt="Client 3 Logo" />
            <div className="client_info">
              <h1>{client3.title}</h1>
              <button
                type="button"
                onClick={() =>
                  window.open(`https://www.youtube.com/${client3.link}`, '_blank')
                }
              >
                {client3.link}
              </button>
            </div>
          </div>
        </div>
      </SlideRight>
    </div>
  );
}

export const TestimonialStyles = css`
  .experience_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120vh;
    width: 100vw;
    background-color: #474a5a;
    padding: 10vh 0;
    text-align: center;
    color: #ebe9ec;
  }

  .testimonial_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 33vh;
    width: 70vw;
    background-color: #2d3142;
  }

  .slide-left {
    align-self: flex-start;
  }

  .slide-right {
    align-self: flex-end;
  }

  .testimonial_container .client {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 33vh;
  }

  .testimonial_container .testimonial {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7dbeff;
    height: 20vh;
    width: 20vw;
    color: #474a5a;
    font-size: 1.5rem;
  }

  .slide-left .testimonial_container .testimonial {
    box-shadow: 10px 5px 5px black, inset -2px -2px white;
    border-radius: 30px 30px 30px 0;
  }

  .slide-right .testimonial_container .testimonial {
    box-shadow: 10px 5px 5px black, inset -2px -2px white;
    border-radius: 30px 30px 0;
  }
  @media only screen and (max-width: 750px) {
    .testimonial_container {
      height: 33vh;
      width: 90vw;
    }
    .testimonial_container .client {
      flex-direction: column;
    }
    .testimonial_container .client img {
      width: 30vw;
    }
    .testimonial_container .client h1 {
      font-size: 2rem;
    }
    .testimonial_container .client button {
      font-size: 1rem;
    }
    .slide-left .testimonial_container .client {
      flex-direction: column-reverse;
    }
    .testimonial_container .testimonial {
      width: 50vw;
    }
  }
`;

export default Testimonial;
