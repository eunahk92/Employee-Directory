import React from 'react';

const SearchBar = ({ handleInputChange, search }) => (
  <form className="form-inline mb-3">
    <div className="form-group mb-2 mx-auto">
      <label htmlFor="search">Search For Employee:</label>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control ml-2"
          placeholder="Employee Name"
          id="search"
        />
    </div>
  </form>
);

export default SearchBar;