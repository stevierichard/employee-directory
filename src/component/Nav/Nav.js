import React from "react";

const Nav = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-5">Employee Directory</h1>
        <form className="form-group">
          <h4>Search for Employee:</h4>
          <input
            className="form-control mb-4"
            id="name"
            placeholder="Search Name Here"
          />
          <button type="button" class="btn btn-info btn-lg mx-5">
            Sort A To Z
          </button>
          <button type="button" class="btn btn-info btn-lg">
            Sort Z To A
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
