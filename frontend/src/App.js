import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import * as API from "./store/api"

import Login  from "./containers/login/login";
import Post   from "./containers/post/post";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Switch>
            <Route path="/login/"     exact component={Login} />
            <Route path="/post/"      exact component={Post} />
            <Redirect from="/"  to={this.props.currentUser.logged_in ? "/post/" : "/login/"} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.info.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
