import React, { Component } from 'react'; 
import { Table, Row, Col, Button, Typography } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';

const shallWeColumns = [
    { title: 'Game', dataIndex: 'game' },
    { title: 'Gamers', dataIndex: 'gamers' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Sorry', dataIndex: 'sorry' },
    { title: 'Sure', dataIndex: 'sure' },
];
const chatroomColumns = [
    { title: 'Game', dataIndex: 'game' },
    { title: 'Gamers', dataIndex: 'gamers' },
    { title: 'Title', dataIndex: 'title' },
    { title: '------', dataIndex: 'empty' },
    { title: 'Join', dataIndex: 'join'},
];
class ChatroomList extends Component {
    constructor(props) {
        super(props)
        this.props.onGetCurrentUser();
    }

    onClickJoin = async (id) => {
        let user = this.props.storedCurrentUser;
        user.chatroom = id;
        await this.props.onPutUser(user);
        await this.props.onCreateChatting(id, user);
        this.props.history.push('/chatroom/' + id);
    }

    onClickSure = async (id) => {
        let user = this.props.storedCurrentUser;
        user.shallWeRoomList.filter(room => {
            return room.id != id;
        });
        user.chatroom = id;
        await this.props.onPutUser(user);
        await this.props.onCreateChatting(id, user);
        this.props.history.push('/chatroom/' + id);
    }
    
    
    onClickSorry = (id) => {
        this.props.onDeleteChatroom(id);
    }
    
    
    render() {
        let data = [];
        if (this.props.isShallWe) {
            this.props.list.map(room => {
                if (room.memberList) {
                    if (room.memberList.length < 1) {
                        this.props.onDeleteChatroom(room.id);
                        this.props.onDeleteChatting();
                    }
                    data.push({
                        key: room.id,
                        game: room.tag == 1? 'LOL' : room.tag == 2? 'HearthStone' : 'MapleStory',
                        gamers: room.memberList.length,
                        title: room.title,
                        sorry: <Button className="sorry-button" type="primary" key={room.id} onClick={() => this.onClickSorry(room.id)}> Sorry </Button>,
                        sure: <Button className="sure-button" type="primary" key={room.id} onClick={() =>this.onClickSure(room.id)}> Sure </Button>,
                    })
                }
                return data;
            });
            return (
                <div className="ChatroomList">     
                    <Row gutter={[40, 0]}>
                        <Col span={24}>
                            <Table columns={shallWeColumns} dataSource={data} />
                        </Col>
                    </Row>
                </div>
            );
        } else {
            this.props.list.map(room => {
                if (room.memberList) {
                    if (room.memberList.length < 1) {
                        this.props.onDeleteChatroom(room.id);
                        this.props.onDeleteChatting();
                    }
                    data.push({
                        key: room.id,
                        game: room.tag == 1? 'LOL' : room.tag == 2? 'HearthStone' : 'MapleStory',
                        gamers: room.memberList.length,
                        title: room.title,
                        empty: null,
                        join: <Button className="join-button" type="primary" onClick={() => this.onClickJoin(room.id)}> Join </Button>,
                    })
                }
                return data;
            });
            return (
                <div className="ChatroomList">     
                    <Row gutter={[40, 0]}>
                        <Col span={24}>
                            <Table columns={chatroomColumns} dataSource={data} />
                        </Col>
                    </Row>
                </div>
            );
        }

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
        onPutUser: (user) => 
            dispatch(actionCreators.putUser(user)),
        onDeleteChatroom: (id) => 
            dispatch(actionCreators.deleteChatroom(id)),
        onCreateChatting: (chatroomId, user) =>
            dispatch(actionCreators.createChatting(chatroomId, user)),
        onDeleteChatting: () =>
            dispatch(actionCreators.deleteChatting()),
    }   
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomList));