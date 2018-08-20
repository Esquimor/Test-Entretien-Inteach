import React, { Component } from "react";
import "./NewModule.css";

class NewModule extends Component {
  state = {
    name: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.onAddModule(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a module</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </div>
        <button className="link" type="submit">Add a module</button>
        <button className="link" type="button" onClick={this.handleReset}>
          Reset
        </button>
      </form>
    );
  }
}

export default NewModule;
