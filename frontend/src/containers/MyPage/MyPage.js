import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import Post from '../../containers/Post/Post';
import { Divider, List, Button, Space } from 'antd';
import Profile from '../../components/Profile/Profile';
import Author from '../../components/Author/Author';

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
        this.props.onGetUserList();
    }

    onClickPost() {
        //- PostInGrid popup (PostInGrid 구현 후 작성)
    }

    onClickCreatePost() {
        this.props.history.push('/post/create/')
    }

    onClickTag() {
        this.props.changeTagState();
    }

    //TODO:
    handleAuthorClicked() {

    }

    //TODO:
    onClickShallWe(receivedUser) {
        let newChatroom = {
            isGlobal: false, 
            title: this.props.storedCurrentUser.username + '\'s shall we?', 
            tag: 1,     //tag가 없는디 어떡하지 
            maxPersonnel: 2, 
            discordLink: null,
        }
        console.log('click');
        this.props.onSendShallWe(newChatroom, receivedUser);
        // current user의 chatroom 바꾸고 redirect?
        // receivedUser가 offline이거나 다른 chatroom에 들어가 있으면 button disable
    }

    render() {
        let test = this.props.storedSelectedChatroom;
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
        let userList = this.props.storedUserList;
        let friendList = [];
        console.log(this.props.storedUserList);
        friendList = user.friendList.map(friend_id => {
            return userList.find(user => user.id === friend_id);
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
                                                    onClick={() => this.onClickShallWe(item)}
                                                    size="small"
                                                    style={{ fontSize: 8, fontWeight: "bolder" }}
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
        onSendShallWe: (newChatroom, receivedUser) => 
            dispatch(actionCreators.sendShallWe(newChatroom, receivedUser)),
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