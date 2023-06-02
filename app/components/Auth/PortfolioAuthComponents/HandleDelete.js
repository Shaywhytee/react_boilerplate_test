/* eslint-disable no-alert */

import axios from 'axios';

export async function handleDelete(videoId, onDelete) {
  try {
    const response = await axios.delete(
      `https://honesteditz-back.herokuapp.com/video/delete/${videoId}`,
    );
    if (response.status === 200) {
      onDelete(videoId);
      window.location.reload();
    } else {
      window.alert('Failed to delete video:', response.status);
    }
  } catch (error) {
    window.alert('Error deleting video:', error);
  }
}
