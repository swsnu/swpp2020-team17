import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled from 'styled-components';
import Post from '../../containers/Post/Post';
import { Divider } from 'antd';
import Profile from '../../components/Profile/Profile';

const UserPageContainer = styled.div`
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
`;

const UserPageLeftContainer = styled.div`
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

const UserPageRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 55%;
    /* justify-content: space-between; */
    /* cursor: pointer; */
`;

// const CreateNewPostsWrapper = styled.div`
//     flex-basis: 20%;
// `;

const GridPostsWrapper = styled.div`
    /* flex-basis: 80%; */
    flex-basis: 100%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);
`;

// const UserPageFooterContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-top: 10px;
// `;

class UserPage extends Component {
    // FIXME: User model 수정되면 currentUser 말고 user를 prop으로 받도록 수정 요함.
    componentDidMount() {
        this.props.onGetUser(this.props.match.params.id);
    }

    onClickPost() {
        //- PostInGrid popup (PostInGrid 구현 후 작성)
    }

    onClickCreatePost() {
        this.props.history.push('/post/create/')
    }

    onClickTag() {
        this.props.changeTagState()
    }

    render() {
        let user, userProfile;
        if (this.props.storedSelectedUser) {
            user = this.props.storedSelectedUser;
            userProfile = (
            <Profile 
                name={user.username}
                avatar={user.avatar}
                tagList={user.tagList}
            />
        );
        }
        

        return(
            <UserPageContainer>
                <ProfileCardWrapper>
                    {userProfile}
                </ProfileCardWrapper>
            </UserPageContainer>
            <UserPageContainer>
                <GridPostsWrapper>
                    <Divider orientation="left" style={{ marginTop: 0 }}>
                        Gallery
                    </Divider>
                </GridPostsWrapper>
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