import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");

  const userIdChange = (e) => {
    setUserId(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <div className="login-box">
        <h2>Forgot Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">User ID</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Username"
              onChange={userIdChange}
              value={userId}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Password</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Password"
              onChange={passwordChange}
              value={password}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Confirm Password"
              onChange={confirmPasswordChange}
              value={confirmPassword}
              required
            />
          </div>
        </form>
        <Link to="/login" className="text-white">
          Back To Login
        </Link>
      </div>
    </div>
  );
}
