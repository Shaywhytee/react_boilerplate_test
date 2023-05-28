import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditDelete from './editDelete';

function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://honesteditz-back.herokuapp.com/video/all')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const filteredVideos = activeFilter
    ? videos.filter(video => video.video_tags.includes(activeFilter))
    : videos;

  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="filters">
        <select value={activeFilter} onChange={handleFilterChange}>
          <option value="">All Games</option>
          <option value="LOL">League of Legends</option>
          <option value="WOW">World of Warcraft</option>
        </select>
        <select value={activeFilter} onChange={handleFilterChange}>
          <option value="">All Creators</option>
          <option value="Creator1">Creator 1</option>
          <option value="Creator2">Creator 2</option>
        </select>
      </div>
      <div className="video_grid">
        {filteredVideos.map(video => (
          <div className="video_card" key={video.id}>
            <h3>{video.video_name}</h3>
            <iframe
              title={video.video_name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.video_link}`}
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <p>{video.video_description}</p>
            <EditDelete video={video} />
          </div>
        ))}
      </div>
    </>
  );
}
export default VideoGrid;
