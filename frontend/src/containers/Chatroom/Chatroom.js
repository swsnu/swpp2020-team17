import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CSRFToken from '../../csrftoken'
import { Redirect } from 'react-router-dom';
import Chatting from '../../components/Chatting/Chatting';
import Author from '../../components/Author/Author';
import styled, { keyframes } from 'styled-components';
import { Divider, List, Button, Space } from 'antd';

import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const MyPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    /* border: 1px solid #005691; */
    /* margin: 5px; */
    width: 100%;
    height: 100%;
    margin: 0;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const MyPageLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    /* align-items: middle; */
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
`;

const ProfileCardWrapper = styled.div`
    flex-basis: 45%;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

const FriendListWrapper = styled.div`
    height: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

const FriendItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const AuthorItem = styled.div`
    flex: none; // flex-grow/shrink/basis : 0/0/auto
`;

const SpaceBetweenItem = styled(Space)`
    flex-grow: 1;
    flex-shrink: 1;
`;

const ButtonItem = styled.div`
    flex: none;
    ${(props) => props.active && `
    animation: ${buttonShake} .8s ;
    `}
`;

// FIXME: 애니메이션 작동 안됨.
const buttonShake = keyframes`
    0%{
        transform: translate(0);
    }
    20%,
    40%,
    60%,
    80%{
        transform: translate(.8em);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.5);
    }
    10%,
    30%,
    50%{
        transform: translate(-.2em);
    }
    70%,
    100%{
        transform: translate(0);
    }
`;

const MyPageRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 55%;
    /* justify-content: space-between; */
    /* cursor: pointer; */
`;

const GridPostsWrapper = styled.div`
    /* flex-basis: 80%; */
    flex-basis: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

const chatClient = new StreamChat('dc8cfsjehcsx');
chatClient.setUser(
    {
        id: 'aa',
        name: 'aa',
        image: 'https://getstream.io/random_png/?id=cold-cloud-8&name=Cold+cloud'
    },
    chatClient.devToken('aa'),
);

const channel = chatClient.channel('messaging', 'new', {
    // add as many custom fields as you'd like
    image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: 'Talk about Go',
});
class Chatroom extends Component {
    componentDidMount() {    
        this.props.onGetCurrentUser();
        this.props.onGetUserList();
        this.props.onGetChatroom(this.props.match.params.id);
    }

    onClickBacktoLobby = () => {
        let user = this.props.storedCurrentUser;
        user.chatroom = -1;
        this.props.onPutUser(user);
        this.props.history.push('/lobby');
    }

    render() {
        let chatroom = this.props.storedSelectedChatroom;
        let userList = this.props.storedUserList;
        let memberList = [];
        console.log(chatroom);
        console.log(userList);
        // if (chatroom && userList) {
        //     memberList = chatroom.memberList.map(member_id => {
        //         if (member_id === this.props.storedCurrentUser.id) return;
        //         else return userList.find(user => user.id === member_id);
        //     });
        // }

        return (
            <div className="Chatroom">
                <MyPageContainer>
                    <MyPageLeftContainer >
                        <ProfileCardWrapper>
                            <Button onClick={() => {this.onClickBacktoLobby()}}> Back to Lobby </Button>
                        </ProfileCardWrapper>
                        <FriendListWrapper>
                            <Divider orientation="center" style={{ marginTop: 0 }}>
                                Members in chatroom {this.props.match.params.id}
                            </Divider>
                            <List
                                dataSource={memberList}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                            <FriendItemWrapper>
                                                <AuthorItem >
                                                    <Author
                                                        //FIXME: user로 넘기도록 수정해야함
                                                        name={item.username}
                                                        avatar={item.avatar}
                                                        showOnline={true}
                                                    />
                                                </AuthorItem>
                                                <SpaceBetweenItem />
                                                <ButtonItem>
                                                    <Button>
                                                        AddorDelete
                                                    </Button>
                                                </ButtonItem>
                                            </FriendItemWrapper>
                                    </List.Item>
                                )}
                            />
                        </FriendListWrapper>
                    </MyPageLeftContainer>
                    <MyPageRightContainer>
                        <Chatting 
                            chatClient={chatClient}
                            channel={channel}
                        />
                    </MyPageRightContainer>
                </MyPageContainer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedUserList: state.ur.userList,
        storedSelectedChatroom: state.chat.selectedChatroom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),
        onGetUserList: () =>
            dispatch(actionCreators.getUserList()),
        onPutUser: (user) => 
            dispatch(actionCreators.putUser(user)),
        onGetChatroom: (id) =>
            dispatch(actionCreators.getChatroom(id)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);