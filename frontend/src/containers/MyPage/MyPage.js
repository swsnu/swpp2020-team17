import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import { Divider, List, Button, Space, Menu, Dropdown } from 'antd';
import Profile from '../../components/Profile/Profile';
import Author from '../../components/Author/Author';
import PostInGrid from '../../components/PostInGrid/PostInGrid'
import GameTag from '../../components/GameTag/GameTag';
import CSRFToken from '../../csrftoken'

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
const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 10%;
    margin-bottom: 20px;
    align-items: middle;
    align-contents: center;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
    align-items: center;
    height: 100%;
`;

const ButtonCreate = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 10%;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
    align-items: middle;
    height: 100%;
`;

const MyPageRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 55%;
    /* justify-content: space-between; */
    /* cursor: pointer; */
`;

const PostInGridWrapper = styled.div`
    /* flex-basis: 80%; */
    flex-basis: 70%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.props.onGetCurrentUser();
        this.props.onGetPostList();
        this.props.onGetUserList();
    }

    state = {
        selectedTagList: [],
    };

    componentDidMount() {
        if (this.props.storedCurrentUser) {
            this.setState({ 
                selectedTagList: this.props.storedCurrentUser.tagList,
            });
            console.log('done');
        }

    }

    handleAuthorClicked = (id) => {
        this.props.history.push('/page/' + id);
    }

    async onClickShallWe(receivingUser, tagId) {
        let newChatroom = {
            isGlobal: false, 
            title: this.props.storedCurrentUser.username + '_s Shall We to ' + receivingUser.username, 
            tag: tagId,     //tag가 없는디 어떡하지  
            maxPersonnel: 2, 
            discordLink: null,
        }
        console.log(receivingUser);
        let sendingUser = this.props.storedCurrentUser;
        await this.props.onSendShallWe(newChatroom, sendingUser, receivingUser);
        if(sendingUser.chatroom != -1) {
            this.props.history.push('/chatroom/' + sendingUser.chatroom);
        }
        // current user의 chatroom 바꾸고 redirect?
        // receivingUser가 offline이거나 다른 chatroom에 들어가 있으면 button disable
    }

    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ? selectedTagList.filter(id => id !== tag_id) : [...selectedTagList, tag_id];
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
    }

    onClickCreatePost = () => {
        if (this.props.storedCurrentUser.tagList.length === 0) {
            window.alert("Add Your Game Tag! Go to Search");
        } else this.props.history.push('/createpost')
    }

    render() {
        let test = this.props.storedSelectedChatroom;
        let user = this.props.storedCurrentUser;
        let userProfile = (user !== null)?
            (<Profile
                name={user.username}
                avatar={user.avatar}
                tagList={user.tagList}
                login={user.login}
            />):
            (<p>Please login!</p>)
        ;
        let userList = this.props.storedUserList;
        let friendList = [];
        console.log(this.props.storedUserList);
        friendList = user.friendList.map(friend_id => {
            return userList.find(user => user.id === friend_id);
        });

        let tagToggle = this.props.storedCurrentUser.tagList.map(tag_id => {
            return (
                <GameTag 
                    key={tag_id}
                    tagId={tag_id} 
                    isChecked={this.state.selectedTagList.includes(tag_id)}
                    onClick={() => this.onToggleTag(tag_id)}
                />
            );
        });
        
        let menuItems = friendList.map(friend => {
            let menu = friend.tagList.map(tagId => {
                return (
                    <Menu.Item onClick={() => this.onClickShallWe(friend, tagId)}>
                        <a>
                            {tagId===1 ? "LOL": tagId===2 ? "HearthStone": "MapleStory"}
                        </a>
                    </Menu.Item>
                );
            });
            return {
                id: friend.id,
                menu: menu,
            };
        });

        return(
            <MyPageContainer>
                <MyPageLeftContainer>
                    <ProfileCardWrapper>
                        {userProfile}
                    </ProfileCardWrapper>
                    <FriendListWrapper>
                        <Divider orientation="center" style={{ marginTop: 0 }}>
                            Friends
                        </Divider>
                        <List
                            dataSource={friendList}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                        <FriendItemWrapper>
                                            <AuthorItem onClick={() => this.handleAuthorClicked(item.id)} style={{ cursor: "pointer" }} >
                                                <Author
                                                    //FIXME: user로 넘기도록 수정해야함
                                                    name={item.username}
                                                    avatar={item.avatar}
                                                    showOnline={item.login}
                                                />
                                                </AuthorItem>
                                            <SpaceBetweenItem />
                                            <ButtonItem>
                                                <CSRFToken />
                                                <Dropdown 
                                                    overlay={
                                                        <Menu>
                                                            {menuItems.find(value => value.id === item.id) && item && item.tagList && item.tagList.length > 0 ? 
                                                                menuItems.find(value => value.id === item.id).menu
                                                                : <Menu.Item>
                                                                    <a>User Has No Game Tag</a>
                                                                    <a>(Cannot Send ShallWe)</a>
                                                                </Menu.Item>
                                                            }
                                                        </Menu>
                                                    } 
                                                    placement="bottomLeft" 
                                                    arrow
                                                >
                                                    <Button
                                                        type="primary"
                                                        shape="round"
                                                        disabled={this.props.storedCurrentUser.chatroom != -1
                                                        || item.chatroom != -1 || item.login == false}
                                                        size="small"
                                                        style={{ fontSize: 8, fontWeight: "bolder" }}
                                                    >
                                                        Shall We
                                                    </Button>
                                                </Dropdown>
                                            </ButtonItem>
                                        </FriendItemWrapper>
                                </List.Item>
                            )}
                        />
                    </FriendListWrapper>
                </MyPageLeftContainer>
                <MyPageRightContainer>
                        <TagWrapper>
                            Your Games: {tagToggle.length > 0 ? tagToggle: "Add your tag!"}
                        </TagWrapper>
                        <ButtonCreate>
                            <Button
                                type="primary"
                                onClick={() => this.onClickCreatePost()}
                            >
                                create post
                            </Button>
                        </ButtonCreate>            
                    <PostInGridWrapper>
                        <Divider orientation="center" style={{ marginTop: 0 }}>
                            Gallery
                        </Divider>
                        <PostInGrid selectedTagList={this.state.selectedTagList} />
                    </PostInGridWrapper>
                    
                </MyPageRightContainer>
            </MyPageContainer>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedPostList: state.ps.postList,
        storedUserList: state.ur.userList,
        storedSelectedChatroom: state.chat.selectedChatroom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),    
        onGetPostList: () =>
            dispatch(actionCreators.getPostList()),
        onGetUserList: () =>
            dispatch(actionCreators.getUserList()),
        onPutUser: (user) =>
            dispatch(actionCreators.putUser(user)),
        onSendShallWe: (newChatroom, sendingUser, receivingUser) => 
            dispatch(actionCreators.sendShallWe(newChatroom, sendingUser, receivingUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);