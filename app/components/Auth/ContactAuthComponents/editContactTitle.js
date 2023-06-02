import React, { useState, useEffect } from 'react';
import EditContactBg from './editContactBackground';
import Alert from '../../Misc/Alert';

function EditContactTitle() {
  const [newContactTitle, setNewContactTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        setErrorMessage('Failed to fetch content:', response.status);
      }
    } catch (error) {
      setErrorMessage("Couldn't fetch content:", error);
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
        setErrorMessage('Failed to update content:', response.status);
      }
    } catch (error) {
      setErrorMessage('Error updating content:', error);
    }
  };

  return (
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
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
    </>
  );
}

export default EditContactTitle;
