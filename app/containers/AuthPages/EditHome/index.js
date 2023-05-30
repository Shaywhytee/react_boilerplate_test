/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import HomePage from '../../HomePage';
import EditHomePageTitle from '../../../components/Auth/HomeAuthComponents/editHomePageTitle';
import EditSteps from '../../../components/Auth/HomeAuthComponents/editSteps';
import EditTestimonials from '../../../components/Auth/HomeAuthComponents/editTestimonials';

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
