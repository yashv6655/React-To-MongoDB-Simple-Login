import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Success from "./components/Success";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/complete">
          <Success />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
