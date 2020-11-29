import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import Post from '../../containers/Post/Post';
import { Divider, List, Button, Space } from 'antd';
import Profile from '../../components/Profile/Profile';
import Author from '../../components/Author/Author';
import { useHistory } from 'react-router';

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

const ButtonCreate = styled.div`
    flex: none;
    align-items: right;
`;

const MyPageRightContainer = styled.div`
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

// const MyPageFooterContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-top: 10px;
// `;

class MyPage extends Component {
    constructor(props) {
        super(props);
    }
    // state= {
        // ID: '',
        // FriendIDList: [],
        // RoomID: '',
        // userName: '',
        // profilePicture: '',
        // postIDList: '',
        // ShallWeRoomList: [],
        // watchedPostedIDList: [],
        // isOnline: false
    // }

    // componentDidMount() {
    //     this.setState({
    //         ID: this.props.user.ID,
    //         FriendIDList: this.props.user.FriendIDList,
    //         RoomID: this.props.user.RoomID,
    //         userName: this.props.user.userName,
    //         profilePicture: this.props.user.profilePicture,
    //         postIDList: this.props.user.postIDList,
    //         ShallWeRoomList: this.props.user.ShallWeRoomList,
    //         watchedPostedIDList: this.props.user.watchedPostedIDList,
    //         isOnline: true
    //     })
    // }

    // componentDidUpdate(prevProps, prevState) {
    //    // Friend의 온라인 상태 여부 확인 (Friend 구현 후 작성)
    // }

    // FIXME: User model 수정되면 currentUser 말고 user를 prop으로 받도록 수정 요함.
    componentDidMount() {
        // if (this.props.storedCurrentUser === null) {
        //     this.setState({
        //         tagList: this.props.storeCurrentUser.tagList,
        //         avatar: this.props.storeCurrentUser.avatar,
        //         name: this.props.storeCurrentUser.username,
        //         // showOnline: this.props.storeCurrentUser.login,
        //     })
        // }
        this.props.onGetCurrentUser();
    }

    onClickPost() {
        //- PostInGrid popup (PostInGrid 구현 후 작성)
    }

    onClickCreatePost() {
    }

    onClickTag() {
        this.props.changeTagState()
    }

    //TODO:
    handleAuthorClicked() {

    }

    //TODO:
    handleShallWeClicked() {

    }

    handleCreatePostClicked() {
    }

    render() {
        // let name = this.props.storedCurrentUser.username;
        // let avatar = this.props.storedCurrentUser.avatar;
        // let tagList = this.props.storedCurrentUser.tagList;
        // let friendList = this.props.storedCurrentUser.friendList;
        let user = this.props.storedCurrentUser;
        let userProfile = (user !== null)?
            (<Profile
                name={user.username}
                avatar={user.avatar}
                tagList={user.tagList}
            />):
            (<p>Please login!</p>)
        ;
        //FIXME: 더미로 테스트하다가 friend 추가 잘 되면, 바꿔놓기.
        // let friendList = this.props.storedCurrentUser.friendList;
        let friendList = [];
        friendList.push({
            "id": 4,
            "username": "Song1",
            "login": true,
            "avatar": "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
            "chatroom": -1,
            "friendList": [],
            "postList": [6, 8],
            "shallWeRoomList": [],
            "watchedPostList": [],
            "tagList": []
        })
        friendList.push({
            "id": 5,
            "username": "Lee1",
            "login": true,
            "avatar": null,
            "chatroom": -1,
            "friendList": [],
            "postList": [7, 9, 10],
            "shallWeRoomList": [],
            "watchedPostList": [],
            "tagList": []
        })
        friendList.push({
            "id": 6,
            "username": "\uc774\ub3d9\uc8fc",
            "login": true,
            "avatar": null,
            "chatroom": -1,
            "friendList": [],
            "postList": [],
            "shallWeRoomList": [],
            "watchedPostList": [],
            "tagList": []
        })

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
                                            <AuthorItem onClick={this.handleAuthorClicked} style={{ cursor: "pointer" }} >
                                                <Author
                                                    //FIXME: user로 넘기도록 수정해야함
                                                    name={item.username}
                                                    avatar={item.avatar}
                                                    showOnline={true}
                                                />
                                                </AuthorItem>
                                            <SpaceBetweenItem />
                                            <ButtonItem>
                                                <Button
                                                    type="primary"
                                                    shape="round"
                                                    onClick={this.handleShallWeClicked}
                                                    disabled="true"
                                                    // type="primary"
                                                    size="small"
                                                    style={{ fontSize: 10, fontWeight: "bolder" }}
                                                >
                                                    Shall We
                                                </Button>
                                            </ButtonItem>
                                        </FriendItemWrapper>
                                </List.Item>
                            )}
                        />
                    </FriendListWrapper>
                </MyPageLeftContainer>
                <MyPageRightContainer>
                    <GridPostsWrapper>
                        <Divider orientation="center" style={{ marginTop: 0 }}>
                            Gallery
                        </Divider>
                    </GridPostsWrapper>
                    <ButtonCreate>
                        <Button
                            type="primary"
                            onClick={() => {this.props.history.push('/createpost')}}
                        >
                            create post
                        </Button>
                    </ButtonCreate>
                </MyPageRightContainer>
            </MyPageContainer>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () => 
            dispatch(actionCreators.getCurrentUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

// const mapStateToProps = (state) => {
//     return {
//         storedCurrentUser: state.ur.currentUser,
//         storedTagList: state.tg.tagList,
//         // storedFriendList: 
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onGetCurrentUser: () => 
//             dispatch(actionCreators.getCurrentUser()),
//         onPutUser: (user) => 
//             dispatch(actionCreators.putUser(user)),
//         onGetChatroomList: () => 
//             dispatch(actionCreators.getChatroomList()),
//         onPutChatroom: (room) => 
//             dispatch(actionCreators.putChatroom(room)),
//         onDeleteChatroom: (id) => 
//             dispatch(actionCreators.deleteChatroom(id)),
//         onGetTagList: () => 
//             dispatch(actionCreators.getTagList()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Lobby);

// export default MyPage;

// const mapStateToProps = (state) => {
//     return {
//         user: state.ur.currentUser,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         //createPost: (id) => {
//         //    return dispatch(actionCreators.createPost(id))
//         //}

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyPage)