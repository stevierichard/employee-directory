import React from "react";

const Nav = (props) => {
  return (
    <div class="jumbotron jumbotron-fluid bg-info">
      <div class="container">
        <h1 class="display-5 text">Employee Directory</h1>
        <form className="form-group">
          <h4>Search for Employee:</h4>
          <input
            className="form-control mb-4"
            id="name"
            placeholder="Search By FirstName Here"
            value={props.search}
            onChange={props.handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Nav;
