import React, { Component, useState } from "react";
// import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import ApplicationRoutes from "./config/ApplicationRoutes";
import LoginPage from "./containers/LoginPage/LoginPage"

class App extends Component {
  state = {
    userLoggined: null
  }

  componentDidMount() {
    this.props.onGetCurrentUser();
    if (this.props.storedCurrentUser === null) {
      console.log("ERROR1:");
      console.log(this.props.storedCurrentUser);
      this.setState({userLoggined: false});
    }
    else {
      console.log("ERROR2:");
      console.log(this.props.storedCurrentUser);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.storedCurrentUser !== prevProps.storedCurrentUser) {
      this.setState({
        userLoggined: true
      });
      this.props.history.push('/post');
    }
  }

  fetchLandingPage = () => {
    if(this.state.userLoggined === null) {
      console.log("userLoggined is still null")
      return (<LoginPage />);
    }
    else if (this.state.userLoggined === false) {
      console.log("No user yet!")
      return (<LoginPage />);
    }
    else if (this.state.userLoggined === true) {
      console.log("Exists user :");
      console.log(this.state.userLoggined);
      return (<ApplicationRoutes />);
    }
    else {
      console.log("Real error!");
      return (<LoginPage />);
    }
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={this.fetchLandingPage} />
            {/* <Route path="/about" component={About} />
            <Route component={NotFound} /> */}
          </Switch>
      </Router>
    )
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
