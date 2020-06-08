import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordCheck()) {
      await axios
        .post("http://localhost:4000/postmessages", {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res);
          alert("Success. Please Go The Login Page.");
        })
        .catch((err) => {
          console.log(err);
          alert("Success");
        });
    } else {
      alert("Passwords Don't Match");
      console.log("failed to signup");
    }
  };

  const passwordCheck = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              onChange={usernameChange}
              value={username}
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your information with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={passwordChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={confirmPasswordChange}
              value={confirmPassword}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <Link to="/login" className="text-white mt-5">
          Back To Login
        </Link>
      </div>
    </div>
  );
}
