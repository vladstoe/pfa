import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <select>
          <option value="all">All Locations</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          {/* Add more location options as needed */}
        </select>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
