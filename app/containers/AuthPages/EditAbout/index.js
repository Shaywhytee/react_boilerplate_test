/* eslint-disable prettier/prettier */
import React from 'react';
import About from '../../AboutPage';
import AboutTextBoxes from '../../../components/Auth/AboutAuthComponents/aboutTextBoxes';
import AboutPictureBoxes from '../../../components/Auth/AboutAuthComponents/aboutPictureBoxes';

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
