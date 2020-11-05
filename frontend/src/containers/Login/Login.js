import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Login extends Component {

    login = () => { 
        this.props.onLogin();
    }

    render() {
        return (
            <div className="Login"> 
                <h1> LogIn Page </h1>
                <button id="login-button" onClick={() => this.login()}>Login with Discord</button>
            </div>
        );
    }
}

  
const mapDispatchToProps = dispatch => {
    return {
      onLogin: () =>
        dispatch(actionCreators.login()),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Login));