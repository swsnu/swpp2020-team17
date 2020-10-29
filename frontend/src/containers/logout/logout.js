import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as API from "../../store/api"

class Logout extends Component {
    constructor(props) {
        super(props)

        /*if(!this.props.currentUser.logged_in) {
            this.props.history.push("/")
        }*/
    }

    logoutHandler = () => {
        this.props.Logout(this.props.currentUser)
        this.props.history.push("/")
    }

    render()
    {
        return (
            <div className="Logout">
                <br/><br/><button id="logout-button" onClick={this.logoutHandler}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: (user) => {
            dispatch(API.Logout(user))
        },
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.info.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);