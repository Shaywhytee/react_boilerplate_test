import React, { useState } from 'react';

function PictureBoxes() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFileChange1 = (event) => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
  };

  const handleFileChange2 = (event) => {
    const selectedFile = event.target.files[0];
    setFile2(selectedFile);
  };

  const handleFileChange3 = (event) => {
    const selectedFile = event.target.files[0];
    setFile3(selectedFile);
  };

  const handleUpload = async () => {
    try {
      if (file1) {
        await fetch('https://storage.googleapis.com/honest_editz_images/photo_box_1.jpg', {
          method: 'PUT',
          body: file1,
          headers: {
            'Content-Type': 'image/jpeg',
          },
        });
      }
  
      if (file2) {
        await fetch('https://storage.googleapis.com/honest_editz_images/photo_box_2.jpg', {
          method: 'PUT',
          body: file2,
          headers: {
            'Content-Type': 'image/jpeg',
          },
        });
      }
  
      if (file3) {
        await fetch('https://storage.googleapis.com/honest_editz_images/photo_box_3.jpg', {
          method: 'PUT',
          body: file3,
          headers: {
            'Content-Type': 'image/jpeg',
          },
        });
      }
  
      console.log('Images updated successfully');
    } catch (error) {
      console.error('Error updating images:', error);
    }
  };
  

  return (
    <>
    <form>
      <h2>Picture Boxes</h2>
      <label>
        <input type="file" onChange={handleFileChange1} />
        Picture Box 1
      </label>
      <label>
        <input type="file" onChange={handleFileChange2} />
        Picture Box 2
      </label>
      <label>
        <input type="file" onChange={handleFileChange3} />
        Picture Box 3
      </label>
    </form>
    <button onClick={handleUpload}>Update Images</button>
    </>
  );
}

export default PictureBoxes;
