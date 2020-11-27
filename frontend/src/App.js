import React, { Component } from "react";
// import { ConnectedRouter } from "connected-react-router";
// import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/index'
import ApplicationRoutes from "./config/ApplicationRoutes";


function App() {

  return (
    <ApplicationRoutes />
  );
}

export default App;
