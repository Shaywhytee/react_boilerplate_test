import React, { useState, useEffect } from "react";
import EditContactBg from "./editContactBackground";

function EditContactTitle() {
  const [newContactTitle, setNewContactTitle] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://honesteditz-back.herokuapp.com/get/content',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        const contactTitle = data.find(item => item.name === 'contactTitle');

        if (contactTitle) {
          setNewContactTitle(contactTitle.title);
        }
      } else {
        console.error('Failed to fetch content:', response.status);
      }
    } catch (error) {
      console.error('Couldn\'t fetch content:', error);
    }
  };

  const saveChanges = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://honesteditz-back.herokuapp.com/content/update',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            changes: [
              {
                name: 'contactTitle',
                title: newContactTitle,
              },
            ],
          }),
        },
      );

      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Failed to update content:', response.status);
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return(
    <>
      <h1>Title Section</h1>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Contact Title"
            value={newContactTitle}
            onChange={e => setNewContactTitle(e.target.value)}
            name="contactTitle"
          />
        Contact Title
        </label>
      </form>
      <button type="button" onClick={saveChanges}>
        Save
      </button>
      <EditContactBg />
    </>
  );
};

export default EditContactTitle;