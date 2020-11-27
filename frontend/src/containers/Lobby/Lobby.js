import ChatroomList from '../../components/ChatroomList/ChatroomList';
import GameTag from '../../components/GameTag/GameTag';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Table, Row, Col, Button, Typography, Tag } from 'antd';

const { Title } = Typography;
const GameTagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
class Lobby extends Component{

    state = {
        selectedTagList: [],
    };

    componentDidMount() {
        this.props.onGetCurrentUser();
        this.props.onGetChatroomList();
        this.props.onGetTagList();
        if (this.props.storedCurrentUser) {
            this.setState({ selectedTagList: this.props.storedCurrentUser.tagList });
        }
    }
    
    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ? selectedTagList.filter(id => id !== tag_id) : [...selectedTagList, tag_id];
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
    }

    onClickCreateRoom = () => {
        this.props.history.push('/RoomInfo')
    }

    onClickJoin = (id) => {
        let user = this.props.storedCurrentUser;
        console.log(user);
        user.chatroom = id;
        this.props.onPutUser(user);
        // this.props.history.push('')
    }

    onClickSure = (id) => {
        let user = this.props.storedCurrentUser;
        user.shallWeRoomList.filter(room => {
            return room.id != id;
        });
        user.chatroom = id;
        this.props.onPutUser(user);
        // this.props.history.push('')
    }
    
    onClickSorry = (id) => {
        this.props.onDeleteChatroom(id);
    }
    

    render() {
        let shallWeList = []
        let chatroomList = []
        let tagList = []
        let tagToggle = []
        let user = null
        
        if (this.props.storedCurrentUser) console.log(this.props.storedCurrentUser);
        if (this.props.storedChatroomList) console.log(this.props.storedChatroomList);
        if (this.props.storedTagList) console.log(this.props.storedTagList);
        if (this.props.storedCurrentUser && this.props.storedChatroomList && this.props.storedTagList) {
            tagList = this.props.storedTagList;
            user = this.props.storedCurrentUser;
            tagToggle = this.props.storedCurrentUser.tagList.map(tag_id => {
                return (
                    <GameTag 
                        id={tag_id} 
                        isChecked={this.state.selectedTagList.includes(tag_id)}
                        onClick={() => this.onToggleTag(tag_id)}
                    />
                );
            });
            shallWeList = this.props.storedChatroomList.filter(room => {
                return user.shallWeRoomList.includes(room.id) && this.state.selectedTagList.includes(room.tag);
            });
            chatroomList = this.props.storedChatroomList.filter(room => {
                return !user.shallWeRoomList.includes(room.id) && room.isGlobal && this.state.selectedTagList.includes(room.tag);
            });
        }
        return (
            <div className="Lobby">
                <div className="tagToggle">
                    <GameTagWrapper>
                        <span style={{ marginRight: 8 }}>Your Games:</span>
                        {tagToggle}
                    </GameTagWrapper> 
                </div>
                
                <Row gutter={[40, 0]}>    
                    <Col span={18}>
                        <Title level={2}>
                            ShallWe List
                        </Title>
                    </Col>
                    <Col span={6}>
                        <Button id="create-chatroom-button" onClick={this.onClickCreateRoom} block>Create Room</Button>
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
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),
        onPutUser: (user) => 
            dispatch(actionCreators.putUser(user)),
        onGetChatroomList: () => 
            dispatch(actionCreators.getChatroomList()),
        onPutChatroom: (room) => 
            dispatch(actionCreators.putChatroom(room)),
        onDeleteChatroom: (id) => 
            dispatch(actionCreators.deleteChatroom(id)),
        onGetTagList: () => 
            dispatch(actionCreators.getTagList()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Lobby);