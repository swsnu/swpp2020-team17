import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled from 'styled-components';
import Post from '../../containers/Post/Post';
import { Divider } from 'antd';
import Profile from '../../components/Profile/Profile';
import Author from '../../components/Author/Author';
import { Table, Row, Col, Button, Typography, Tag } from 'antd';
import GameTag from '../../components/GameTag/GameTag';
import {
    UserAddOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';

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

const UserPageRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 80%;
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
    height: 20%;
`;

const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin-bottom: 20px;
    align-items: middle;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
    align-items: center;
    height: 20%;
`;

const GridPostsWrapper = styled.div`
    /* flex-basis: 80%; */
    flex-basis: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

class UserPage extends Component {
    // FIXME: User model 수정되면 currentUser 말고 user를 prop으로 받도록 수정 요함.
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

    onClickPost() {
        //- PostInGrid popup (PostInGrid 구현 후 작성)
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

    onClickShallWe() {
        let newChatroom = {
            isGlobal: false, 
            title: this.props.storedCurrentUser.username + '\'s shall we?', 
            tag: 1,     //tag가 없는디 어떡하지 
            maxPersonnel: 2, 
            discordLink: null,
        }
        let receivingUser = this.props.storedSelectedUser;
        let sendingUser = this.props.storedCurrentUser;
        this.props.onSendShallWe(newChatroom, sendingUser, receivingUser);
        // current user의 chatroom 바꾸고 redirect?
        // receivingUser가 offline이거나 다른 chatroom에 들어가 있으면 button disable
    }
    
    render() {
        let currentUser, selectedUser, userProfile, tagToggle;
        console.log(this.props.storedCurrentUser);
        if (this.props.storedSelectedUser && this.props.storedCurrentUser) {
            currentUser = this.props.storedCurrentUser;
            selectedUser = this.props.storedSelectedUser;
            userProfile = (
                <Author
                    name={selectedUser.username}
                    avatar={selectedUser.avatar}
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
        }

        return(
            <UserPageContainer>
                <UserPageRowContainer>
                    <ProfileCardWrapper>
                        {userProfile}
                        <Button onClick={() => this.onToggleFriend()}>
                            {this.state.addOrDelete === 'Add'? <UserAddOutlined /> : <UserDeleteOutlined />}
                            {this.state.addOrDelete}
                        </Button>
                        <Button onClick={() => this.onClickShallWe()}>ShallWe</Button>
                    </ProfileCardWrapper>
                </UserPageRowContainer>
                <UserPageRowContainer>
                    <TagWrapper>
                        {tagToggle}
                    </TagWrapper>
                </UserPageRowContainer>
                <UserPageRowContainer>

                </UserPageRowContainer>
                <UserPageRowContainer>
                    <GridPostsWrapper>
                        <Divider orientation="left" style={{ marginTop: 0 }}>
                            Gallery
                        </Divider>
                    </GridPostsWrapper>
            </UserPageRowContainer>
            </UserPageContainer>
        );
        // return(

        //     <div>
        //             <div className="leftArea">
        //             <div className="profileArea">profile{ /* <Profile /> */ }</div>
                
        //         <div className="friendsArea">friends{ /* <Friends /> */ }</div>
        //         </div>
        //         <div className="tagArea">tag{ /* <Tag onClick={() => this.onClickTag/> */ }</div>
        //         <button className="createPost" onClick={() => this.onClickCreatePost}>create post</button>
        //         <div className="postArea" onClick={() => this.onClickPost}>posts { /* <PostInGrid /> */ } </div>
        //     </div>
        // )
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