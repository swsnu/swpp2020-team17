import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CSRFToken from '../../csrftoken'
import {Redirect} from 'react-router-dom';

class Login extends Component {

    login = () => { 
        window.location = ('https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify')
        this.props.onLogin();
        //return <Redirect to='/'/>
    }

    render() {
        return (
            <div className="Login"> 
                <CSRFToken />
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