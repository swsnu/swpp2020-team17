import React, { Component, useState } from "react";
// import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import ApplicationRoutes from "./config/ApplicationRoutes";
import LoginPage from "./containers/LoginPage/LoginPage"
import { ConnectedRouter } from "connected-react-router";

class App extends Component {
  state = {
    userLogined: null
  }

  componentDidMount() {
    this.props.onGetCurrentUser();
    if (this.props.storedCurrentUser === null) {
      console.log("ERROR1:");
      console.log(this.props.storedCurrentUser);
      this.setState({userLogined: false});
    }
    else {
      console.log("ERROR2:");
      console.log(this.props.storedCurrentUser);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.storedCurrentUser !== prevProps.storedCurrentUser) {
      this.setState({
        userLogined: true
      });
    }
  }

  handleLogout = () => {
    // 일단 current user을 null로만 만들게 구현
    //this.props.history.push('/');
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
    if (this.state.userLogined) {
      return (
        <Router>
            <Switch>
              <ApplicationRoutes handleLogout={this.handleLogout} />
            </Switch>
          </Router>
      );
    }
    return (
      <Router>
        <Switch>
          <LoginPage />
        </Switch>
      </Router>
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
