// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchQueryChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearchQueryChange(searchQuery);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit(event);
        }
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSearchSubmit} className="search-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                />
                <select>
                    <option value="all">All Locations</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    {/* Add more location options as needed */}
                </select>
                <button type="submit" className="button-search">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
