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
    };

    componentDidMount() {
        this.props.onGetUser(this.props.match.params.id);
        if (this.props.storedSelectedUser) {
            this.setState({ selectedTagList: this.props.storedSelectedUser.tagList });
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
    
    render() {
        let user, userProfile, tagToggle;
        if (this.props.storedSelectedUser) {
            user = this.props.storedSelectedUser;
            userProfile = (
            <Author
                name={user.username}
                avatar={user.avatar}
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
                        <Button>Add</Button>
                        <Button>ShallWe</Button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);