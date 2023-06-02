import React from 'react';
import Contact from '../../ContactPage';
import EditContactTitle from '../../../components/Auth/ContactAuthComponents/editContactTitle';
import EditAdSquares from '../../../components/Auth/ContactAuthComponents/editAdSquares';
import EditContactButtons from '../../../components/Auth/ContactAuthComponents/editContactButtons';

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
