/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../utils/authContext';
import { handleDelete } from '../../components/Portfolio/HandleDelete';
import HandleEditForm from '../../components/Portfolio/HandleEditForm';

function Portfolio() {
  const { loggedIn } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };

  const filteredVideos = activeFilter
    ? videos.filter(video => video.video_tags.includes(activeFilter))
    : videos;

  return (
    <div className="portfolio_container">
      <div className="filters">
        <button onClick={() => handleFilterChange('')}>All</button>
        <button onClick={() => handleFilterChange('LOL')}>
          League of Legends
        </button>
        <button onClick={() => handleFilterChange('WOW')}>
          World of Warcraft
        </button>
      </div>
      <div className="video_grid">
        {filteredVideos.map(video => (
          <div className="video_card" key={video.id}>
            <iframe
              title={video.video_name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.video_link}`}
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <h3>{video.video_name}</h3>
            <p>{video.video_description}</p>
            {loggedIn && (
              <div className="admin_video_btns">
                <button onClick={() => handleDelete(video.id)}>
                Delete
                </button>
                <button type="button" onClick={() => setSelectedVideo(video)}>
                Edit
                </button>
              </div>
            )}
          </div>
        ))}
        {selectedVideo && (
          <HandleEditForm selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/> 
        )}
      </div>
    </div>
  );
}

export default Portfolio;
