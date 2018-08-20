import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Module from "../../components/module/Module";
import "./Trainings.css";

const mapStateToProps = state => {
  return {
    modules: state.modules
  };
};

class Trainings extends Component {
  render() {
    return (
      <div className="Training">
        {this.props.modules.map(module => {
          return (
            <div>
              <Module module={module} key={module.id} />
              <Link className="link" to="#">Do it</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  undefined
)(Trainings);
