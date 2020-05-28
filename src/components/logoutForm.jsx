import React, { Component } from "react";
import auth from "../services/authService";

const Logout = () => {
  auth.logout();
  window.location = "/";
};

export default Logout;
