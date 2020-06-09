import React, { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Success from "./components/Success";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { UserContext } from "./components/Context";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/postmessages")
      .then((res) => {
        setUsers(res.data);
        //console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/complete">
            <Success />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
