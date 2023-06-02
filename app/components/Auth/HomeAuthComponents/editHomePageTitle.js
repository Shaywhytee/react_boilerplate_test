import React, { useState, useEffect } from 'react';
import Alert from '../../Misc/Alert';

function EditHomePageTitle() {
  const [newHeroTitle, setNewHeroTitle] = useState('');
  const [newHeroContent, setNewHeroContent] = useState('');
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
        const heroText = data.find(item => item.name === 'heroText');
        if (heroText) {
          setNewHeroTitle(heroText.title);
          setNewHeroContent(heroText.content);
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
                name: 'heroText',
                title: newHeroTitle,
                content: newHeroContent,
                link: '',
              },
            ],
          }),
        },
      );

      if (response.ok) {
        setNewHeroTitle('');
        setNewHeroContent('');
        window.location.reload();
      } else {
        setErrorMessage('Failed to update content:', response.status);
      }
    } catch (error) {
      setErrorMessage('Couldnt updating content:', error);
    }
  };

  return (
    <>
      <h1>Page Title</h1>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Hero Box Title"
            value={newHeroTitle}
            onChange={e => setNewHeroTitle(e.target.value)}
            name="heroTitle"
          />
          Hero Box Title
        </label>
        <label>
          <textarea
            type="textbox"
            placeholder="Hero Box Content"
            value={newHeroContent}
            onChange={e => setNewHeroContent(e.target.value)}
            name="heroContent"
          />
          Hero Box Content
        </label>
      </form>
      <button type="button" onClick={saveChanges}>
        Save
      </button>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
    </>
  );
}

export default EditHomePageTitle;
