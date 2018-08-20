import React from "react";
import { connect } from "react-redux";
import { deleteModule } from "../../store/actions";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Module from "../../components/module/Module";
import AddModule from "../../components/module/AddModule";

function Dashboard({ modules, onDelete }) {
  const userType = localStorage.getItem("userType");
  const userId = localStorage.getItem("userId");
  return (
    <div className="Dashboard">
      {modules.map(module => {
        if (userType == 3 || userId == module.owner) {
          return (
            <div key={module.id}>
              <Module module={module} onDelete={onDelete} key={module.id} />
              <Link className="link" to={`/dashboard/${module.id}`}>Edit</Link>
              <button className="link" type="button" onClick={() => onDelete(module.id)}>
                Remove
              </button>
            </div>
          );
        }
      })}
      <AddModule />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modules: state.modules
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteModule(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
