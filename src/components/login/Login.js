import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import "./Login.css";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: payload => {
      dispatch(login(payload));
    }
  };
};

class Login extends Component {
  state = {
    email: "a",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    if (localStorage.getItem("userId")) {
      this.props.history.push("/dashboard");
    } else {
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} className="container">
          <div className="form">
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
          <div className="form">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <button className="submit-login" type="submit">Login</button>
        <div>
          <div>Compte:</div>
          <div>admin@admin.com/admin</div>
          <div>teacher@teacher.com/teacher</div>
          <div>student@student.com/student</div>
        </div>
        </form>
      </div>
    );
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
