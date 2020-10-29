import React, { Component } from 'react';


class Login extends Component {

    state = {
        token: ''
    }

    login = () => { // 로그인 url로 이동
        this.props.onLogin();
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2 className="text-left">Discord Login Demo</h2>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row mt-5 mb-5">
                                <div className="col-md-4 mt-2 m-auto ">
                                    {this.state.token ?
                                        <button className="logoutBtn loginBtn--discord" onClick={this.logout}>Logout</button> :
                                        <button className="loginBtn loginBtn--discord" onClick={this.login} ref="">Login with Discord</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login
