import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userAPI from "../../store/actions/user"

class Logout extends Component {

    // constructor(props) {
    //     super(props);

    //     if(!this.props.currentUser.login) {
    //         this.props.history.push("/login/")
    //     }
    // }

    logoutHandler = () => {
        this.props.logout(this.props.currentUser)
    }

    render() {
        return (
            <div className="Logout">
                <button id="logout-button" onClick={this.logoutHandler}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (user) => {
            dispatch(userAPI.logout(user))
        },
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.ur.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);