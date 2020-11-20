import ChatroomList from '../../components/ChatroomList/ChatroomList'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';

import { withRouter } from 'react-router';
import { Table, Row, Col, Button, Typography } from 'antd';



class Lobby extends Component{
    componentDidMount() {
        this.props.onGetCurrentUser();
        this.props.onGetChatroomList();
    }

    onClickCreateRoom= () => {
        this.props.history.push('/RoomInfo')
    }

    onClickJoin = (id) => {
        // let user = this.props.currentUser;
        // user.chatroom = id;
        // this.props.onPutUser(user);
        // this.props.history.push('')
    }

    onClickSure = (id) => {
        let user = this.props.currentUser;
        // user.shallWeRoomList.filter(room => {
        //     return room.id != id;
        // });
        // user.chatroom = id;
        // this.props.onPutUser(user);
        // this.props.history.push('')
    }
    
    onClickSorry = (id) => {
        this.props.deleteChatroom(id);
    }

    render() {
        let shallWeList = []
        let chatroomList = []
        let tagList = []
        const { Title } = Typography;

        if (this.props.storedCurrentUser && this.props.storedChatroomList && this.props.storedTagList) {
            console.log(this.props.storedTagList)
            console.log(this.props.storedChatroomList);
            tagList = this.props.storedTagList;
            let user = this.props.storedCurrentUser;
            shallWeList = this.props.storedChatroomList.filter(room => {
                return user.shallWeRoomList.includes(room.id);
            });
            chatroomList = this.props.storedChatroomList.filter(room => {
                return !user.shallWeRoomList.includes(room.id) && room.isGlobal;
            });
        }
        return (
            <div className="Lobby">
                <Row gutter={[40, 0]}>
                    <Col span={18}>
                        <Title level={2}>
                            ShallWe List
                        </Title>
                    </Col>
                    <Col span={6}>
                        <Button onClick={this.onClickCreateRoom} block>Create Room</Button>
                    </Col>
                </Row>

                <div className="shallWeList">
                    <ChatroomList
                        list={shallWeList}
                        tagList={tagList}
                        isShallWe={true}
                        onClickSure={() => this.onClickSure()}
                        onClickSorry={() => this.onClickSorry()}
                    />
                </div>


                <Row gutter={[40, 0]}>
                    <Col span={18}>
                        <Title level={2}>
                            Chatroom List
                        </Title>
                    </Col>
                    <Col span={6}></Col>
                </Row>

                <div className="chatroomList">
                    <ChatroomList
                        list = {chatroomList}
                        tagList={tagList}
                        isShallWe={false}
                        onClickJoin={() => this.onClickJoin()}
                    /> 
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedChatroomList: state.chat.chatroomList,
        storedTagList: state.tg.tagList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => dispatch(actionCreators.getCurrentUser()),
        onPutUser: (user) => dispatch(actionCreators.putUser(user)),
        onGetChatroomList: () => dispatch(actionCreators.getChatroomList()),
        onPutChatroom: (room) => dispatch(actionCreators.putChatroom(room)),
        onDeleteChatroom: (id) => dispatch(actionCreators.deleteChatroom(id)),
        onGetTagList: () => dispatch(actionCreators.getTagList()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Lobby);