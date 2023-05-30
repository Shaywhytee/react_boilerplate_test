import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../utils/authContext';
import { handleDelete } from './HandleDelete';
import HandleEditForm from './HandleEditForm';

function EditDelete( {video} ) {
  const { loggedIn } = useContext(AuthContext);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      {loggedIn && (
        <div className="admin_video_btns">
          <button onClick={() => handleDelete(video.id)}>Delete</button>
          <button type="button" onClick={() => setSelectedVideo(video)}>
            Edit
          </button>
        </div>
      )}
      {selectedVideo && (
        <HandleEditForm
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      )}
    </>
  );
}

export default EditDelete;
