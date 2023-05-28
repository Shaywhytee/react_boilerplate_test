/* eslint-disable prettier/prettier */
import React from 'react';
import About from '../../AboutPage';
import AboutTextBoxes from './aboutTextBoxes';
import AboutPictureBoxes from './aboutPictureBoxes';

function EditAbout() {

  return (
    <div>
      <div className="page_container">
        <AboutTextBoxes />
        <AboutPictureBoxes />
      </div>
      <About />
    </div>
  );
}

export default EditAbout;
