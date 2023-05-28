/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import HomePage from '../../HomePage';
import EditHomePageTitle from './editHomePageTitle';
import EditSteps from './editSteps';
import EditTestimonials from './editTestimonials';

function EditHome() {

  return (
    <div>
      <div className="page_container">
        <EditHomePageTitle />
        <EditSteps />
        <EditTestimonials />
      </div>
      <HomePage />
    </div>
  );
}

export default EditHome;
