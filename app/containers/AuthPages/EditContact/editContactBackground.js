import React, { useState } from "react";

function EditContactBg() {
  const [file1, setFile1] = useState(null);

  const handleFileChange1 = (event) => {
    const selectedFile = event.target.files[0];
    setFile1(selectedFile);
  };

  const handleUpload = async () => {
    try {
      if (file1) {
        await fetch('https://storage.googleapis.com/honest_editz_images/contact_bg.jpg', {
          method: 'PUT',
          body: file1,
          headers: {
            'Content-Type': 'image/jpeg',
          },
        });
      window.location.reload();
      }
      console.log('Images updated successfully');
    } catch (error) {
      console.error('Error updating images:', error);
    }
  };


  return(
    <>
    <h1>Contact Title Background</h1>
    <form>
      <label>  
        <input type="file" onChange={handleFileChange1} />
        Contact Title Background
      </label>
    </form>
    <button onClick={handleUpload}>Update Images</button>
  </>
    
  );
};

export default EditContactBg;