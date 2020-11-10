import ChatRoomList from '../../components/ChatRoomList/ChatRoomList'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import { withRouter } from 'react-router';
// import Popup from 'react-popup';

const mapStateToProps = (state) => {
    return {
        chatRoomList: state.chat.chatRoomList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetChatRoomList: () => dispatch(actionCreators.getChatRoomList())
    }
}

class Lobby extends Component{
    componentDidMount() {
        this.props.onGetChatRoomList();
    }

    chatRoomList = [
        {tag:'LoL', title:'골드 이하 금지' , members:['1', '2']},
        {tag:'HS', title:'랭크전' , members:['1', '2', '3']}
    ]

    render() {
        const { sampleStr } = "Lobby";
        return (
            <div>
                <div className="Title">{sampleStr}</div>
                <div className="lobbyHedaer">{ 
                    <ChatRoomList
                        chatlist = {[
                            {tag:'LoL', title:'골드 이하 금지' , members:['1', '2']},
                            {tag:'HS', title:'랭크전' , members:['1', '2', '3']}
                        ]}
                        clickRoomInfo={() => this.clickRoomInfo()} 
                    /> 
                }</div>
            </div>
        )
    }

    clickRoomInfo = () => {
        this.props.history.push('/RoomInfo')
    }
}

// Popup.registerPlugin('prompt', function(){

//     this.create({
//         title: 'Create a New Room!',

//     })
// })

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);