/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { handleEditConfirmation } from './HandleEditConfirmation';

function HandleEditForm({ selectedVideo, setSelectedVideo }) {
  const [editedVideo, setEditedVideo] = useState({
    video_name: '',
    video_link: '',
    video_description: '',
    video_tags: '',
  });

  useEffect(() => {
    setEditedVideo(selectedVideo);
  }, [selectedVideo]);

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(editedVideo)
    await handleEditConfirmation(editedVideo.id, editedVideo);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit} className="edit_form">
        <div className="video_title">
          <h1>Video Title</h1>
          <p>{editedVideo.video_name}</p>
        </div>
        <div className="video_link">
          <h1>Video Link</h1>
          <p>{editedVideo.video_link}</p>
        </div>
        <div className="video_description">
          <h1>Video Description</h1>
          <p>{editedVideo.video_description}</p>
        </div>
        <input
          type="text"
          placeholder="New Video Description"
          value={editedVideo.video_description}
          onChange={e =>
            setEditedVideo({
              ...editedVideo,
              video_description: e.target.value,
            })
          }
        />
        <div className="video_description">
          <h1>Video Tags</h1>
          <p>{editedVideo.video_tags}</p>
        </div>
        <input
          type="text"
          placeholder="New Video Tags"
          value={editedVideo.video_tags}
          onChange={e =>
            setEditedVideo({
              ...editedVideo,
              video_tags: e.target.value,
            })
          }
        />
        <button type="submit">Confirm</button>
        <button type="button" onClick={() => setSelectedVideo(null)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default HandleEditForm;
