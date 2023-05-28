import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NavigationDropdown() {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    const selectedRoute = e.target.value;
    setSelectedOption(selectedRoute);
    history.push(selectedRoute);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange} className="nav_dd">
      <option value="" disabled>
        Select a page
      </option>
      <option value="/edit-home">Edit Home</option>
      <option value="/edit-about">Edit About</option>
      <option value="/edit-portfolio">Edit Portfolio</option>
      <option value="/edit-contact">Edit Contact</option>
    </select>
  );
}

export default NavigationDropdown;
