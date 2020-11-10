import LobbyHeader from '../../components/LobbyHeader/LobbyHeader'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

class Lobby extends Component{
    componentDidMount() {

    }

    render() {
        const { sampleStr } = "Lobby";
        return (
            <div>
                <div className="Title">{sampleStr}</div>
                <div className="lobbyHedaer">{ <LobbyHedaer /> }</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);