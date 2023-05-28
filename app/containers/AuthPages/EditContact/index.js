/* eslint-disable prettier/prettier */
import React from 'react';
import Contact from '../../ContactPage';
import EditContactTitle from './editContactTitle';
import EditAdSquares from './editAdSquares';
import EditContactButtons from './editContactButtons';


function EditContact() {
  
  return (
    <div>
      <div className="page_container">
        <EditContactTitle />
        <EditAdSquares />
        <EditContactButtons />
      </div>
      <Contact />
    </div>
  );
}

export default EditContact;
