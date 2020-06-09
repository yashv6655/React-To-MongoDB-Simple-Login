import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { UserContext } from "./Context";
import axios from "axios";

export default function Home() {
  return <div>Hello from home page</div>;
}
