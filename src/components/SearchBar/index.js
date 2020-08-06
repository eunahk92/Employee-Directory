import React from 'react';

function SearchBar(props) {
  const { handleInputChange, search } = props;
    return (
        <form className="form-inline">
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
}

export default SearchBar;