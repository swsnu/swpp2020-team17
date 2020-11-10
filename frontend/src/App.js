// import React, { Component } from "react";
// import { ConnectedRouter } from "connected-react-router";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { connect } from 'react-redux';

<<<<<<< HEAD
// import Login  from "./containers/Login/Login";
// import Post   from "./containers/Post/Post";
// import Lobby  from "./containers/Lobby/Lobby";
// import Search from "./containers/Search/Search";
// import MyPage from "./containers/MyPage/MyPage";
// import Platform from "./containers/Platform/Platform"

// class App extends Component {
//   render() {
//     return (
//       <ConnectedRouter history={this.props.history}>
//         <div className="App">
//           <Switch>
//             <Route path="/login/"       exact component={Login} />
//             <Route path="/"             exact component={Platform} />
//             <Route path="/lobby/"       exact component={Lobby} />
//             <Route path="/search/"      exact component={Search} />
//             <Route path="/mypage/"      exact component={MyPage} />
//             {/* <Redirect from="/" to="/login/" /> */}
//           </Switch>
//         </div>
//       </ConnectedRouter>
//     );
//   }
// }

// export default App;

import React from 'react';
import ApplicationRoutes from "./config/ApplicationRoutes";
function App() {
  return (
    <ApplicationRoutes />
  );
}
export default App;
=======
import * as userAPI from './store/actions/user'

import Login  from "./containers/Login/Login";
import Post   from "./containers/Post/Post";
import Lobby  from "./containers/Lobby/Lobby";
import Search from "./containers/Search/Search";
import MyPage from "./containers/MyPage/MyPage";

class App extends Component {

  componentDidMount() {
    this.props.getUserInfo()
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Switch>
            <Route path="/login/"       exact component={Login} />
            <Route path="/"             exact component={Post} />
            <Route path="/lobby/"       exact component={Lobby} />
            <Route path="/search/"      exact component={Search} />
            <Route path="/mypage/"      exact component={MyPage} />
            <Redirect from="/" to="/login/" />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => {
      dispatch(userAPI.getUserInfo())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.ur.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> ac03f95fc1c2f572a1baa41397eb2418c2d15aa2
