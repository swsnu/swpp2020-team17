import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CSRFToken from '../../csrftoken'
import { Redirect } from 'react-router-dom';

class Chatroom extends Component {

    render() {
        return (
            <div className="Chatroom">
                Chatroom Page {this.props.match.params.id}
            </div>
        );
    }
}



export default Chatroom;