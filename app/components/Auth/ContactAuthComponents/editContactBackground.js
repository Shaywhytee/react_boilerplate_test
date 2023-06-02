import React, { useState } from 'react';
import Alert from '../../Misc/Alert';

function EditContactBg() {
  const [file1, setFile1] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange1 = event => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
  };

  const handleUpload = async () => {
    try {
      if (file1) {
        await fetch(
          'https://storage.googleapis.com/honest_editz_images/contact_bg.jpg',
          {
            method: 'PUT',
            body: file1,
            headers: {
              'Content-Type': 'image/jpeg',
            },
          },
        );
        window.location.reload();
      }
      setErrorMessage('Images updated successfully');
    } catch (error) {
      setErrorMessage('Error updating images:', error);
    }
  };

  return (
    <>
      <h1>Contact Title Background</h1>
      <form>
        <label>
          <input type="file" onChange={handleFileChange1} />
          Contact Title Background
        </label>
      </form>
      <button type="button" onClick={handleUpload}>
        Update Images
      </button>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
    </>
  );
}

export default EditContactBg;
