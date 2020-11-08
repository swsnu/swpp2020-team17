// import React, { Component } from "react";
// import { ConnectedRouter } from "connected-react-router";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { connect } from 'react-redux';

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