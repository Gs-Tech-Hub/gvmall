import React from "react";
import { SearchIcon } from "./Icons";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="category-select">
        <option>All Categories</option>
      </select>
      <input type="text" placeholder="I'm searching for..." />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
