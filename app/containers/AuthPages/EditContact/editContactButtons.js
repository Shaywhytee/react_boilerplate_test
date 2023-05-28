import React, { useState, useEffect } from "react";

function EditContactButtons() {
  const [newDiscordLink, setNewDiscordLink] = useState('');
  const [newDiscordTitle, setNewDiscordTitle] = useState('');

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
        const discord = data.find(item => item.name === 'discordButton');

        if (discord) {
          setNewDiscordTitle(discord.title);
          setNewDiscordLink(discord.link);
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
                name: 'discordButton',
                title: newDiscordTitle,
                link: newDiscordLink,
              },
            ],
          }),
        },
      );

      if (response.ok) {
        setNewDiscordLink('');
        setNewDiscordTitle('');
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
    <h1>Contact Buttons Section</h1>
    <form onSubmit={saveChanges}>
      <label>
        <input
          type="text"
          placeholder="Discord Link"
          value={newDiscordLink}
          onChange={e => setNewDiscordLink(e.target.value)}
          name="discordLink"
        />
      Discord Link
      </label>
      <label>
        <input
          type="text"
          placeholder="Discord Title"
          value={newDiscordTitle}
          onChange={e => setNewDiscordTitle(e.target.value)}
          name="discordTitle"
        />
      Discord Button Title
      </label>
    </form>
    <button type="button" onClick={saveChanges}>
    Save
    </button>
  </>

  );
};

export default EditContactButtons;