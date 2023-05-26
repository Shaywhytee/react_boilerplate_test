import React from "react";

import { SlideLeft, SlideRight } from '../../components/Misc/Slide';
import ScholTvLogo from '../../images/scholtv_logo.jpg'
import DemexlLogo from '../../images/idemexi_logo.jpg'
import ReluminateLogo from '../../images/reluminate_logo.jpg'
import { css } from "styled-components";

function Testimonial() {

  return(
    <div className="experience_container">
    <SlideRight>
      <div className='testimonial_container'>
          <div className='testimonial'>
            <p>This is a testimonial where people will write great things about you!</p>
          </div>
        <div className='client'>
          <img src={ScholTvLogo} alt='SholeTv logo' />
          <div className='client_info'>
            <h1>ScholeTV</h1>
            <button type='button' onClick={() => window.open('https://www.youtube.com/@Shole13', '_blank')}>@Schole</button>
          </div>
        </div>
      </div>
    </SlideRight>
    <SlideLeft>
      <div className='testimonial_container'>
        <div className='client'>
          <div className='client_info'>
            <h1>Demex</h1>
            <button type='button' onClick={() => window.open('https://www.youtube.com/@ldemexl', '_blank')}>@1demex1</button>
          </div>
          <img src={DemexlLogo} alt='Demexl logo' />
        </div>
        <div className='testimonial'>
          <p>This is a testimonial where people will write great things about you!</p>
        </div>
      </div>
    </SlideLeft>
    <SlideRight>
      <div className='testimonial_container'>
        <div className='testimonial'>
          <p>This is a testimonial where people will write great things about you!</p>
        </div>
        <div className='client'>
          <img src={ReluminateLogo} alt='Reluminate logo' />
          <div className='client_info'>
            <h1>Reluminate</h1>
            <button type='button' onClick={() => window.open('hhttps://www.youtube.com/@ReluminateGG', '_blank')}>@ReluminateGG</button>
          </div>
        </div>
      </div>
    </SlideRight>
  </div>
  )
}

export const TestimonialStyles = css`
.experience_container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 120vh;
  width: 100vw;
  background-color: #474A5A;
  padding: 10vh 0;
  text-align: center;
  color: #EBE9EC;
}

.testimonial_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 33vh;
  width: 70vw;
  background-color: #2D3142;
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
  background-color: #7DBEFF;
  height: 20vh;
  width: 20vw;
  color: #474A5A;
  font-size: 1.5rem;
}

.slide-left .testimonial_container .testimonial{
  box-shadow: 10px 5px 5px black, inset -2px -2px white;
  border-radius: 30px 30px 30px 0;
}

.slide-right .testimonial_container .testimonial{
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
`

export default Testimonial;