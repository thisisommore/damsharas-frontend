import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Finder from "./pages/finder/finder";
import Helper from "./pages/helper/helper";
import Home from "./pages/home/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/finder" component={Finder} />
        <Route path="/helper" component={Helper} />

        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
