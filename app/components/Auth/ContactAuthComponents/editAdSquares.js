import React, { useState, useEffect } from "react";

function EditAdSquares() {
  const [newAdSquare1Title, setNewAdSquare1Title] = useState('');
  const [newAdSquare2Title, setNewAdSquare2Title] = useState('');
  const [newAdSquare3Title, setNewAdSquare3Title] = useState('');
  const [newAdSquare4Title, setNewAdSquare4Title] = useState('');

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
        const adSquare1Text = data.find(item => item.name === 'adSquare1');
        const adSquare2Text = data.find(item => item.name === 'adSquare2');
        const adSquare3Text = data.find(item => item.name === 'adSquare3');
        const adSquare4Text = data.find(item => item.name === 'adSquare4');
        if (adSquare1Text) {
          setNewAdSquare1Title(adSquare1Text.title);
        }
        if (adSquare2Text) {
          setNewAdSquare2Title(adSquare2Text.title);
        }
        if (adSquare3Text) {
          setNewAdSquare3Title(adSquare3Text.title);
        }
        if (adSquare4Text) {
          setNewAdSquare4Title(adSquare4Text.title);
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
              { name: 'adSquare1', title: newAdSquare1Title },
              { name: 'adSquare2', title: newAdSquare2Title },
              { name: 'adSquare3', title: newAdSquare3Title },
              { name: 'adSquare4', title: newAdSquare4Title },
            ],
          }),
        },
      );

      if (response.ok) {
        setNewAdSquare1Title('');
        setNewAdSquare2Title('');
        setNewAdSquare3Title('');
        setNewAdSquare4Title('');
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
    <h1>AdSquares Section</h1>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="textbox"
            placeholder="Ad Square 1"
            value={newAdSquare1Title}
            onChange={e => setNewAdSquare1Title(e.target.value)}
            name="adSquareText"
          />
        Ad Square 1 Text
        </label>
        <label>
          <input
            type="text"
            placeholder="Ad Square 2"
            value={newAdSquare2Title}
            onChange={e => setNewAdSquare2Title(e.target.value)}
            name="adSquareText"
          />
        Ad Square 2 Text
        </label>
        <label>
          <input
            type="textbox"
            placeholder="Ad Square 3"
            value={newAdSquare3Title}
            onChange={e => setNewAdSquare3Title(e.target.value)}
            name="adSquareText"
          />
        Ad Square 3 Text
        </label>
        <label>
          <input
            type="text"
            placeholder="Ad Square 4"
            value={newAdSquare4Title}
            onChange={e => setNewAdSquare4Title(e.target.value)}
            name="adSquareText"
          />
        Ad Square 4
        </label>
      </form>
      <button type="button" onClick={saveChanges}>
        Save
      </button>
    </>
  );
};

export default EditAdSquares;