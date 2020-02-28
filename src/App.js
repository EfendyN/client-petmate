import React, { Component } from "react";
import Landingpage from "./components/home/js/Landingpage";
import IndexUser from "./components/user/js/IndexUser";
import Profile from "./components/user/js/Profile";
import AddPet from "./components/user/js/AddPet";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/IndexUser">
            <IndexUser />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/AddPet">
            <AddPet />
          </Route>

          <Route path="/">
            <Landingpage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
