import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">View Employee Details</h3>
              <div className="row" style={{ marginLeft: "2px" }}>
                <p>Employee First Name: {this.state.firstName}</p>
              </div>
              <div className="row" style={{ marginLeft: "2px" }}>
                <p>Employee Last Name: {this.state.lastName}</p>
              </div>
              <div className="row" style={{ marginLeft: "2px" }}>
                <p>Employee Email Id: {this.state.emailId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
