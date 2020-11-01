import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Login  from "./containers/Login/Login";
import Post   from "./containers/Post/Post";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Switch>
            <Route path="/login/"     exact component={Login} />
            <Route path="/posts/"      exact component={Post} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
