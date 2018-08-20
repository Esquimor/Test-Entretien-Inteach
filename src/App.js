import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EditModule from "./components/module/EditModule";
import Trainings from "./components/trainings/Trainings";

let userType = localStorage.getItem("userType");
if (!userType) {
  userType = 0;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userType >= 2 ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const LogedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userType >= 1 ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/trainings">Trainings</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-container">
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/dashboard/:id" component={EditModule} />
          <LogedRoute path="/trainings" exact component={Trainings} />
          <LogedRoute path="/trainings/:id" component={Trainings} />
        </div>
      </div>
    );
  }
}

export default App;
