import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Table from "../Table/Table";
import API from "../Utils/API";

class Container extends Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    // allows function to be ran when component first renders
    this.getEmployees();
  }

  getEmployees = () => {
    API.search().then((res) => {
      this.setState({ employees: res.data.results });
    });
  };

  //create sorting function for first and last name
  sortByFirstName = () => {
    const sorted = this.state.employees.sort(compare);
    function compare(a, b) {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    }
    this.setState({ employees: sorted });
  };

  sortByFirstName = () => {
    const sorted = this.state.employees.sort(compare);
    function compare(a, b) {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();

      if (nameA > nameB) {
        return 1;
      } else if (nameA < nameB) {
        return -1;
      } else return 0;
    }
    this.setState({ employees: sorted });
  };

  sortByLastName = () => {
    const sorted = this.state.employees.sort(compare);
    function compare(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    }
    this.setState({ employees: sorted });
  };

  handleChange = (name) => {
    this.setState({ search: name });
  };

  handleInputChange = (event) => {
    this.handleChange(event.target.value);
    // event.target
  };
  render() {
    return (
      <div>
        <Nav
          handleInputChange={this.handleInputChange}
          handleChange={this.handleChange}
          search={this.state.search}
        />

        <Table
          employees={this.state.employees}
          sortByFirstName={this.sortByFirstName}
          sortByLastName={this.sortByLastName}
          handleChange={this.handleChange}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default Container;
