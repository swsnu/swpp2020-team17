import React, { Component, useState } from "react";
// import { ConnectedRouter } from "connected-react-router";
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import ApplicationRoutes from "./config/ApplicationRoutes";
import LoginPage from "./containers/LoginPage/LoginPage"
import { ConnectedRouter } from "connected-react-router";

class App extends Component {
  state = {
    userLogined: false
  }

  componentDidMount() {
    this.props.onGetCurrentUser();
    if (this.props.storedCurrentUser === null) {
      console.log("ERROR1:");
      console.log(this.props.storedCurrentUser);
      this.setState({userLogined: false});
    }
    // else {
    //   console.log("ERROR2:");
    //   console.log(this.props.storedCurrentUser);
    // }
    else if (!this.props.storedCurrentUser.login) {
      console.log("ERROR2:")
      this.setState({userLogined: false});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.storedCurrentUser !== prevProps.storedCurrentUser) {
      if(this.props.storedCurrentUser.login)
        this.setState({
          userLogined: true
        });
    }
  }

  handleLogout = () => {
    // 일단 current user을 null로만 만들게 구현
    //this.props.history.push('/');
    let user = this.props.storedCurrentUser
    user.login = false
    this.props.onPutUser(user)
    this.setState({
      userLogined: false
    });
  }

  // fetchLandingPage = () => {
  //   if(this.state.userLogined === null) {
  //     console.log("userLogined is still null")
  //     return (<LoginPage />);
  //   }
  //   else if (this.state.userLogined === false) {
  //     console.log("No user yet!")
  //     return (<LoginPage />);
  //   }
  //   else if (this.state.userLogined === true) {
  //     console.log("Exists user :");
  //     console.log(this.state.userLogined);
  //     return (<ApplicationRoutes handleLogout={this.handleLogout} />);
  //   }
  //   else {
  //     console.log("Real error!");
  //     return (<LoginPage />);
  //   }
  // }

  render() {
    console.log(this.state.userLogined)
    if (this.state.userLogined) {
      return (
        <ConnectedRouter history={this.props.history}>
            <Switch>
              <div className="App">
                {/* <ApplicationRoutes handleLogout={this.handleLogout} history={this.props.history} /> */}
                <ApplicationRoutes history={this.props.history} handleLogout={this.handleLogout}/>
              </div>
            </Switch>
          </ConnectedRouter>
      );
    }
    else
      return (
        <ConnectedRouter history={this.props.history}>
          <div className="App">
            <Switch>
              {/* <LoginPage /> */}
              <Route path='/login' component={LoginPage} />
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </ConnectedRouter>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onPutUser: (user) =>
            dispatch(actionCreators.putUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



// function App() {
//   const [user, setUser] = useState(null);
//   const authenticated = user !== null;



//   // const login =
//   componentDidMount() {

//   }
//   return (
//     <Router>
//       <header>
//         <Link to="/">
//           <button>TestPage</button>
//         </Link>
//         <Link to="/Login">
//           <button>LoginPage</button>
//         </Link>
//       </header>
//       <hr />
//       <main>
//         <Switch>
//           <Route exact path="/" component={TestPage} />
//           <Route exact path="/Login" component={LoginPage} />
//         </Switch>
//       </main>
//     </Router>
    // <div className="App">
    //   <ApplicationRoutes />
    // </div>
//   );
// }

// export default App;
