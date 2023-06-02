import React, { useState, useEffect } from 'react';
import Alert from '../../Misc/Alert';

function AboutTextBoxes() {
  const [newTextBox1Title, setNewTextBox1Title] = useState('');
  const [newTextBox1Content, setNewTextBox1] = useState('');
  const [newTextBox2Title, setNewTextBox2Title] = useState('');
  const [newTextBox2Content, setNewTextBox2] = useState('');
  const [newTextBox3Title, setNewTextBox3Title] = useState('');
  const [newTextBox3Content, setNewTextBox3] = useState('');
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
        const textBox1Text = data.find(item => item.name === 'textbox1');
        const textBox2Text = data.find(item => item.name === 'textbox2');
        const textBox3Text = data.find(item => item.name === 'textbox3');
        if (textBox1Text) {
          setNewTextBox1Title(textBox1Text.title);
          setNewTextBox1(textBox1Text.content);
        }
        if (textBox2Text) {
          setNewTextBox2Title(textBox2Text.title);
          setNewTextBox2(textBox2Text.content);
        }
        if (textBox3Text) {
          setNewTextBox3Title(textBox3Text.title);
          setNewTextBox3(textBox3Text.content);
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
                name: 'textbox1',
                title: newTextBox1Title,
                content: newTextBox1Content,
                link: '',
              },
              {
                name: 'textbox2',
                title: newTextBox2Title,
                content: newTextBox2Content,
                link: '',
              },
              {
                name: 'textbox3',
                title: newTextBox3Title,
                content: newTextBox3Content,
                link: '',
              },
            ],
          }),
        },
      );

      if (response.ok) {
        setNewTextBox1Title('');
        setNewTextBox1('');
        setNewTextBox2Title('');
        setNewTextBox2('');
        setNewTextBox3Title('');
        setNewTextBox3('');
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
      <h1>About Text Boxes</h1>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Text Box 1 Title"
            value={newTextBox1Title}
            onChange={e => setNewTextBox1Title(e.target.value)}
            name="textBoxTitle"
          />
          Text Box 1 Title
        </label>
        <label>
          <textarea
            type="textbox"
            placeholder="Text Box 1 Content"
            value={newTextBox1Content}
            onChange={e => setNewTextBox1(e.target.value)}
            name="textBoxContent"
          />
          Text Box 1 Content
        </label>
      </form>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Text Box2 Title"
            value={newTextBox2Title}
            onChange={e => setNewTextBox2Title(e.target.value)}
            name="textBoxTitle"
          />
          Text Box 2 Title
        </label>
        <label>
          <textarea
            type="textbox"
            placeholder="Text Box 2 Content"
            value={newTextBox2Content}
            onChange={e => setNewTextBox2(e.target.value)}
            name="textBoxContent"
          />
          Text Box 2 Content
        </label>
      </form>
      <form onSubmit={saveChanges}>
        <label>
          <input
            type="text"
            placeholder="Text Box 3 Title"
            value={newTextBox3Title}
            onChange={e => setNewTextBox3Title(e.target.value)}
            name="textBoxTitle"
          />
          Text Box 3 Title
        </label>
        <label>
          <textarea
            type="textbox"
            placeholder="Text Box 3 Content"
            value={newTextBox3Content}
            onChange={e => setNewTextBox3(e.target.value)}
            name="textBoxContent"
          />
          Text Box 3 Content
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

export default AboutTextBoxes;
