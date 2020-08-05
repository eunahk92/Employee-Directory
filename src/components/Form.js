import React from 'react';

function Form(props) {
    return (
        <form>
          <div className="form-group">
            <label htmlFor="search">Search For Employee:</label>
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Employee Name"
              id="search"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
              Search
            </button>
          </div>
        </form>
      );
}

export default Form;