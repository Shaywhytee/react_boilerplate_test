import React, { useState, useEffect } from 'react';
import Alert from '../../Misc/Alert';

function EditSteps() {
  const [newStepsTitle, setNewStepsTitle] = useState('');
  const [newStep1Title, setNewStep1Title] = useState('');
  const [newStep2Title, setNewStep2Title] = useState('');
  const [newStep3Title, setNewStep3Title] = useState('');
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
        const stepsText = data.find(item => item.name === 'steps');
        const step1Text = data.find(item => item.name === 'step1');
        const step2Text = data.find(item => item.name === 'step2');
        const step3Text = data.find(item => item.name === 'step3');
        if (stepsText) {
          setNewStepsTitle(stepsText.title);
        }
        if (step1Text) {
          setNewStep1Title(step1Text.title);
        }
        if (step2Text) {
          setNewStep2Title(step2Text.title);
        }
        if (step3Text) {
          setNewStep3Title(step3Text.title);
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
              { name: 'steps', title: newStepsTitle, content: '', link: '' },
              { name: 'step1', title: newStep1Title, content: '', link: '' },
              { name: 'step2', title: newStep2Title, content: '', link: '' },
              { name: 'step3', title: newStep3Title, content: '', link: '' },
            ],
          }),
        },
      );

      if (response.ok) {
        setNewStepsTitle('');
        setNewStep1Title('');
        setNewStep2Title('');
        setNewStep3Title('');
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
      <h1>Steps</h1>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Steps"
            value={newStepsTitle}
            onChange={e => setNewStepsTitle(e.target.value)}
            name="stepsTitle"
          />
          Steps Title Box
        </label>
      </form>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Step 1"
            value={newStep1Title}
            onChange={e => setNewStep1Title(e.target.value)}
            name="step1Title"
          />
          Step 1 Box
        </label>
        <label>
          <input
            type="text"
            placeholder="Step 2"
            value={newStep2Title}
            onChange={e => setNewStep2Title(e.target.value)}
            name="step2Title"
          />
          Step 2 Box
        </label>
        <label>
          <input
            type="text"
            placeholder="Step 3"
            value={newStep3Title}
            onChange={e => setNewStep3Title(e.target.value)}
            name="step3Title"
          />
          Step 3 Box
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

export default EditSteps;
