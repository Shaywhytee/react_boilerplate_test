/* eslint-disable no-alert */
import axios from 'axios';

export async function handleEditConfirmation(videoId, editedVideo) {
  try {
    const response = await axios.put(
      `https://honesteditz-back.herokuapp.com/video/update/${videoId}`,
      editedVideo,
    );
    if (response.status === 200) {
      window.location.reload();
    } else {
      window.alert('Failed to update video:', response.status);
    }
  } catch (error) {
    window.alert('Error updating video', error);
  }
}
