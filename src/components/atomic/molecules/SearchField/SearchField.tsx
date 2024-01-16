import React from "react";
import { SearchIcon, Textfield } from "../../atoms";
import "./styles.css";

const SearchField: React.FC = () => {
  return (
    <div className="searchField">
      <label htmlFor="searchField" className="searchLabel">
        <SearchIcon color="#8A94A4" size={24} />
      </label>
      <Textfield id="searchField" placeholder="Search menu items" />
    </div>
  );
};

export { SearchField };
