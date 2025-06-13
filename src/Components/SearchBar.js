import React from "react";
import "../Components/style/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-input">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search jobs by 'company'" />
        </div>
        <div className="search-input">
          <span className="icon">💼</span>
          <input type="text" placeholder="Your Experience" />
        </div>
        <div className="search-input">
          <span className="icon">📍</span>
          <input type="text" placeholder="Search for an area or city" />
        </div>
        <button className="search-btn">Search jobs</button>
      </div>
    </div>
  );
};

export default SearchBar;
