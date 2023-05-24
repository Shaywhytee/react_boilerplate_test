/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Portfolio from '../../PortfolioPage';

function EditPortfolio() {
  const [newVideoName, setNewVideoName] = useState('');
  const [newVideoDescription, setNewVideoDescription] = useState('');
  const [newVideoLength, setNewVideoLength] = useState('');
  const [newVideoSize, setNewVideoSize] = useState('');
  const [newVideoTags, setNewVideoTags] = useState('');
  const [newVideoLink, setNewVideoLink] = useState('');

  function extractVideoId(videoLink) {
    const url = new URL(videoLink);
    const searchParams = new URLSearchParams(url.search);
    return(searchParams.get('v'));
  };
  
  

  const extractVideoInfo = async videoLink => {
    const videoId = extractVideoId(videoLink);

    const apiKey = 'AIzaSyDV2EJn-7CwSdeKJPuUp8Tc6hsB4RPPaVk';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        const videoInfo = data.items[0];
        const videoTitle = videoInfo.snippet.title;
        const videoLength = videoInfo.contentDetails.duration;
        console.log(videoInfo.snippet.title);
        setNewVideoName(videoTitle);
        setNewVideoLength(videoLength);
        setNewVideoLink(videoId);
      } else {
        console.error('Failed to fetch video information', response.status);
      }
    } catch (error) {
      console.error('Failed to fetch video information', error);
    }
  };

  const saveChanges = async e => {
    e.preventDefault();

    try {
      extractVideoInfo(newVideoLink);

      const response = await fetch(
        'https://honesteditz-back.herokuapp.com/video/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            video_name: newVideoName,
            video_description: newVideoDescription,
            video_length: newVideoLength,
            video_size: newVideoSize,
            video_tags: newVideoTags,
            video_link: newVideoLink,
          }),
        },
      );

      if (response.ok) {
        setNewVideoName('');
        setNewVideoDescription('');
        setNewVideoLength('');
        setNewVideoSize('');
        setNewVideoTags('');
        setNewVideoLink('');
        window.location.reload();
      } else {
        console.error('Failed to update portfolio', response.status);
      }
    } catch (error) {
      console.error('Failed to add the video', error);
    }
  };

  return (
    <div>
      <div className="page_container">
        <form onSubmit={saveChanges}>
          <label>
            <input
              type="text"
              placeholder="Video Link"
              onChange={e => {
                setNewVideoLink(e.target.value);
                extractVideoInfo(e.target.value);
              }}
              name="videoLink"
            />
          Youtube Video Link
          </label>
          <label>
            <input
              type="text"
              placeholder="Video Description"
              onChange={e => setNewVideoDescription(e.target.value)}
              name="videoDescription"
            />
          Enter your video description. This will appear below the video title.
          </label>
          <label>
            <input
              type="text"
              placeholder="Video Tags"
              onChange={e => setNewVideoTags(e.target.value)}
              name="videoTags"
            />
          Enter your video tags seperated by a comma.
          </label>
        </form>
        <button type="button" onClick={saveChanges}>
        Submit
        </button>
      </div>
      <Portfolio />
    </div>
  );
}

export default EditPortfolio;
