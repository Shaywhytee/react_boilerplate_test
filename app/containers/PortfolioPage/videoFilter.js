import React, { useState } from "react";

function VideoFilter({ filteredVideos }) {
  const [activeFilter, setActiveFilter] = useState('');


  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };

  const filteredVideos = activeFilter
    ? videos.filter(video => video.video_tags.includes(activeFilter))
    : videos;
  
  return (
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
  );
};

export default VideoFilter;