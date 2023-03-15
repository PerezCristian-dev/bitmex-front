import React from "react";

export const SearchBar = () => {
  return (
    <div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block">
      <input
        className="form-control"
        placeholder="Search for anything..."
        type="search"
      />
      <button className="btn">
        <i className="fas fa-search d-none d-md-block"></i>
      </button>
    </div>
  );
};
