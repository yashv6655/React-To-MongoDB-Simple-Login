import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { UserContext } from "./Context";
import axios from "axios";

export default function Home() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/home">
        Simple Test Login
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/signup">
              Pricing
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link disabled" to="/forgotpassword">
              Disabled
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
