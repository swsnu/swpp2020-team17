import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled from 'styled-components';
import { Divider, Menu, Dropdown } from 'antd';
import Author from '../../components/Author/Author';
import GridPost from '../../components/PostInGrid/UserPagePostInGrid';

import { Button } from 'antd';
import GameTag from '../../components/GameTag/GameTag';
import {
    UserAddOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';
import CSRFToken from '../../csrftoken'


const UserPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    /* border: 1px solid #005691; */
    /* margin: 5px; */
    width: 100%;
    height: 100%;
    margin: 0;
    justify-content: space-between;
`;

const FirstRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 10%;
    /* align-items: middle; */
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
`;

const SecondRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 10%;
    /* align-items: middle; */
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
`;

const ThirdRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 70%;
    /* align-items: middle; */
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
`;


const ProfileCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin-bottom: 20px;
    align-items: middle;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin-bottom: 20px;
    align-items: middle;
    align-contents: center;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
    align-items: center;
    height: 100%;
`;

const GridPostsWrapper = styled.div`
    /* flex-basis: 80%; */
    flex-basis: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

class UserPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedTagList: [],
        addOrDelete: null,
    };

    componentDidMount() {
        this.props.onGetCurrentUser();
        this.props.onGetUser(this.props.match.params.id);
        if (this.props.storedCurrentUser && this.props.storedSelectedUser) {
            this.setState({ 
                selectedTagList: this.props.storedSelectedUser.tagList,
                addOrDelete: (this.props.storedCurrentUser.friendList.find(id => 
                    id===this.props.storedSelectedUser.id) == undefined)? 'Add' : 'Delete',
            });
            console.log('done');
        }
    }

    onClickCreatePost() {
        this.props.history.push('/post/create/')
    }

    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ? selectedTagList.filter(id => id !== tag_id) : [...selectedTagList, tag_id];
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
    }

    onToggleFriend = () => {
        let currentUser = this.props.storedCurrentUser;
        let selectedUserId = this.props.storedSelectedUser.id;
        if (this.state.addOrDelete === 'Add') {
            currentUser.friendList.push(selectedUserId);
            this.setState({ addOrDelete: 'Delete' });
        } else {
            currentUser.friendList = currentUser.friendList.filter(id => {
                return id !== selectedUserId
            });
            this.setState({ addOrDelete: 'Add' });
        }
        this.props.onPutUser(currentUser);
        
    }

    async onClickShallWe(tagId) {
        let receivingUser = this.props.storedSelectedUser;
        let newChatroom = {
            isGlobal: false, 
            title: this.props.storedCurrentUser.username + '_s Shall We to ' + receivingUser.username, 
            tag: tagId, 
            maxPersonnel: 2, 
            discordLink: null,
        };
        let sendingUser = this.props.storedCurrentUser;
        await this.props.onSendShallWe(newChatroom, sendingUser, receivingUser);
        if(sendingUser.chatroom !== -1) {
            this.props.history.push('/chatroom/' + sendingUser.chatroom);
        }
    }
    
    render() {
        let currentUser, selectedUser, userProfile, tagToggle;
        let tagList = [];
        console.log(this.props.storedCurrentUser);
        if (this.props.storedSelectedUser && this.props.storedCurrentUser) {
            currentUser = this.props.storedCurrentUser;
            selectedUser = this.props.storedSelectedUser;
            userProfile = (
                <Author
                    name={selectedUser.username}
                    avatar={selectedUser.avatar}
                    login={selectedUser.login}
                />
            );
            tagToggle = this.props.storedSelectedUser.tagList.map(tag_id => {
                return (
                    <GameTag 
                        key={tag_id}
                        tagId={tag_id} 
                        isChecked={this.state.selectedTagList.includes(tag_id)}
                        onClick={() => this.onToggleTag(tag_id)}
                    />
                );
            });
            tagList = this.props.storedSelectedUser.tagList;
        }

        let menu = tagList.map(tagId => {
            return (
                <Menu.Item key={tagId} onClick={() => this.onClickShallWe(tagId)}>
                    <a>
                        {tagId===1 ? "LOL": tagId===2 ? "HearthStone": "MapleStory"}
                    </a>
                </Menu.Item>
            );
        });
        if (currentUser && selectedUser) {
            return(
                <div className="UserPage">
                <UserPageContainer>
                    <FirstRowContainer>
                        <ProfileCardWrapper>
                            {userProfile}
                            <Button 
                                className="toggle-friend"
                                onClick={() => this.onToggleFriend()}
                            >
                                {this.state.addOrDelete === 'Add'? <UserAddOutlined /> : <UserDeleteOutlined />}
                                {this.state.addOrDelete}
                            </Button>
                            <CSRFToken />
                            <Dropdown 
                                overlay={
                                    <Menu>
                                        {menu && tagList.length > 0 ? 
                                            menu
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
                                    disabled={currentUser.chatroom !== -1
                                    || selectedUser.chatroom !== -1 || selectedUser.login == false}
                                >
                                    Shall We
                                </Button>
                            </Dropdown>
                        </ProfileCardWrapper>
                    </FirstRowContainer>
    
                    <SecondRowContainer>
                        <TagWrapper>
                            {tagToggle && tagToggle.length > 0 ? tagToggle: "User has no tag"}
                        </TagWrapper>
                    </SecondRowContainer>
    
                    
                    
                    <ThirdRowContainer>
                        <GridPostsWrapper>
                            <Divider orientation="center" style={{ marginTop: 0 }}>
                                Gallery
                            </Divider>
                            <GridPost selectedTagList={this.state.selectedTagList}/>
                        </GridPostsWrapper>
                    </ThirdRowContainer>
                </UserPageContainer>
                </div>
            );
        } else {
            return (
                <div className="UserPage">
                    Loading
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedSelectedUser: state.ur.selectedUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),
        onGetUser: (user_id) =>
            dispatch(actionCreators.getUser(user_id)),
        onPutUser: (user) =>
            dispatch(actionCreators.putUser(user)),
        onSendShallWe: (newChatroom, sendingUser, receivingUser) =>
            dispatch(actionCreators.sendShallWe(newChatroom, sendingUser, receivingUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);