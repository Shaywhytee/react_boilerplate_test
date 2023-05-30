/* eslint-disable prettier/prettier */
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
      console.error('Failed to update video:', response.status);
    }
  } catch (error) {
    console.error('Error updating video', error);
  }
}