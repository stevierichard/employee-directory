import React from "react";
import employees from "../Utils/API";

const Table = (props) => {
  if (typeof props.search === "") {
    return (
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th scope="col">
              <a onClick={() => props.sortByFirstName()}> First Name </a>
            </th>
            <th scope="col">
              <a onClick={() => props.sortByLastName()}> Last Name </a>
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Street Address</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.cell}>
              <th scope="row">
                <img src={employee.photo} />
              </th>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (typeof props.search === "string") {
    let matches = props.employees.filter((result) => {
      return (
        (result.name.first + " " + result.name.last)
          .substring(0, props.search.length)
          .toLowerCase() === props.search.toLowerCase()
      );
    });
    return (
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th scope="col">
              <a onClick={() => props.sortByFirstName()}>
                {" "}
                First Name (A - Z){" "}
              </a>
            </th>
            <th scope="col">
              <a onClick={() => props.sortByLastName()}> Last Name (A - Z) </a>
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Street Address</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((employee) => (
            <tr key={employee.cell}>
              <th scope="row">
                <img src={employee.photo} />
              </th>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default Table;
