import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditDelete from '../Auth/PortfolioAuthComponents/editDelete';
import LoadingSpinner from '../Misc/loadingSpinner';
import Alert from '../Misc/Alert';

function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [gameFilter, setGameFilter] = useState('');
  const [creatorFilter, setCreatorFilter] = useState('');
  const [availableTags, setAvailableTags] = useState([]);
  const [availableCreators, setAvailableCreators] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get('https://honesteditz-back.herokuapp.com/video/all')
      .then(response => {
        setVideos(response.data);
        const tags = response.data.reduce((acc, video) => {
          const videoTags = video.video_tags.split(',');
          videoTags.forEach(tag => {
            if (!acc.includes(tag)) {
              acc.push(tag);
            }
          });
          return acc;
        }, []);
        setAvailableTags(tags);

        const creators = response.data.reduce((acc, video) => {
          if (!acc.includes(video.video_creator)) {
            acc.push(video.video_creator);
          }
          return acc;
        }, []);
        setAvailableCreators(creators);
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage(`Error fetching videos: ${error}`);
        setLoading(false);
      });
  }, []);

  const filteredVideos = videos.filter(video => {
    const videoTags = video.video_tags.split(',');
    const gameFilterPassed = !gameFilter || videoTags.includes(gameFilter);
    const creatorFilterPassed =
      !creatorFilter || video.video_creator === creatorFilter;
    return gameFilterPassed && creatorFilterPassed;
  });

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo,
  );

  const handleGameFilterChange = filter => {
    setGameFilter(filter);
    setCurrentPage(1);
  };

  const handleCreatorFilterChange = filter => {
    setCreatorFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredVideos.length / videosPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="filters">
        <select
          value={gameFilter}
          onChange={e => handleGameFilterChange(e.target.value)}
        >
          <option key="all-games" value="">
            All Games
          </option>
          {availableTags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <select
          value={creatorFilter}
          onChange={e => handleCreatorFilterChange(e.target.value)}
        >
          <option key="all-creators" value="">
            All Creators
          </option>
          {availableCreators.map(creator => (
            <option key={creator} value={creator}>
              {creator}
            </option>
          ))}
        </select>
      </div>
      <div className="video_grid">
        {currentVideos.map(video => (
          <div className="video_card" key={video.id}>
            <h3>{video.video_name}</h3>
            <p>{video.video_creator}</p>
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
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            type="button"
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
    </>
  );
}

export default VideoGrid;
