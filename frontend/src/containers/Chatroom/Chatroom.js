import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CSRFToken from '../../csrftoken'
import { Redirect } from 'react-router-dom';
import Chat from '../../components/Chatting/Chatting';
class Chatroom extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }

    render() {
        return (
            <div className="Chatroom">
                Chatroom Page {this.props.match.params.id}
                <Chat username={this.props.storedCurrentUser.username}/>
            </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);