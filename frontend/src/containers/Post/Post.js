import React, { Component } from 'react';
import { connect } from 'react-redux';
//FIXME: Infinite scroll to be implemented
// import InfiniteScroll from 'react-infinite-scroller';
import { List, Divider, Space, Button, Switch, Menu, Dropdown } from 'antd';
//FIXME: Infinite scroll to be implemented
// import { Spin, message } from 'antd';
import { MessageTwoTone, HeartTwoTone, DeleteOutlined } from '@ant-design/icons';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import Author from '../../components/Author/Author'
import CommentView from '../../components/Comment/Comment';
import CSRFToken from '../../csrftoken'
/* Components */
import GameTag from '../../components/GameTag/GameTag'
// import CommentList from './CommentList';

import {Redirect} from 'react-router-dom';

const PostPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
    /* padding: 8px 24px; */
    height: 100%;

`;

const LineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-self: center;
`;

const GameTagWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
    align-items: center;
`;

const RecommendToggleWrapper = styled.div`
    display: flex;
    flex-basis: 40%;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    justify-content: flex-end;
`;

const LoadingWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
`;

const PostListWrapper = styled.div`
/*Responsive Styles*/
/* Smartphones (portrait) ---------------- */
@media only screen
and (max-width : 320px)
{
/* Add Your CSS Styling Here */
}

/* Smartphones (landscape) ---------------- */
@media only screen
and (min-width : 321px)
and (max-width : 767px)
{
/* Add Your CSS Styling Here */
}

/* Tablets (portrait) -------------------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait)
{
/* Add Your CSS Styling Here */
}

/* Tablets (landscape) ------------------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape)
{
/* Add Your CSS Styling Here */
    width: 90%;
    align-self: center;
}
/* Old Desktops and laptops ------------------ */

@media only screen
and (min-width : 1025px)
{
/* Add Your CSS Styling Here */
    width: 80%;
    align-self: center;
}

/* Desktops ------------------ */
@media only screen
and (min-width : 1201px)
{
/* Add Your CSS Styling Here */
    width: 70%;
    align-self: center;
}
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 15px;
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    /* border: 1px solid #005691; */
`;

const PostHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const AuthorItem = styled.div`
    flex: none; // flex-grow/shrink/basis : 0/0/auto
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

const GameTagItem = styled.div`
    margin-left: auto;
    margin-right: 0px;
`;

const PostBodyContainer = styled.div`
    // empty container for handle click body
`;

const WidePostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    /* flex-wrap: wrap; */
    cursor: pointer;
`;

const WideContentsContainer = styled.div`
    /* flex-grow:2; */
    flex-wrap: wrap;
    flex-basis: 100%;
    word-break: break-all;
    word-wrap: normal;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    /* word-wrap: "true"; */
    /* display: inline-flex; */
    /* flex-basis: 70%; */
`;
const WideImageContainer = styled.div`
    /* flex-grow:1; */
    flex-basis:1000%;
    min-height: 1px;
    margin-left: 20px;
    margin-right: 20px;
    /* flex: auto; */
    /* width: 30%; */
`;

const NarrowPostWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    flex-shrink: 1;
    /* flex-wrap: wrap; */
    cursor: pointer;
`;

const NarrowContentsContainer = styled.div`
    /* flex-grow:2; */
    flex-wrap: wrap;
    flex-basis: 70%;
    word-break: break-all;
    word-wrap: normal;
    /* word-wrap: "true"; */
    /* display: inline-flex; */
    /* flex-basis: 70%; */
`;

const NarrowImageContainer = styled.div`
    /* flex-grow:1; */
    flex-basis:30%;
    min-height: 1px;
    margin-left: 20px;
    /* flex: auto; */
    /* width: 30%; */
`;

const PostFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5px;
`;



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            selectedTagList: [],
            activePostList: [],
            clickedPostId: null,
            commentingPostId: null,
            likingPostId: null,
            isRecommend: true,
        //FIXME: Infinite scroll to be implemented
        // loading: false,
        // hasMore: true,
        }
        this.props.onGetCurrentUser();
        this.props.onGetUserList();
        this.props.onGetPostList();
        this.props.onGetTagList();
        this.props.onRecommendPostList();
    }

    // state = {
    //     selectedTagList: [],
    //     activePostList: [], // under selected tag
    //     //FIXME: Infinite scroll to be implemented
    //     // loading: false,
    //     // hasMore: true,
    // }

    componentDidMount() {
        //FIXME: Infinite scroll to be implemented
        // }
        // this.fetchData(res => {
        //     this.setState({
        //         postList: res.results,
        //     });
        // });
        if (this.props.storedCurrentUser) {
            this.setState({
                selectedTagList: this.props.storedCurrentUser.tagList,
                activePostList: this.props.storedPostList
            });
        }
    }
    onToggleRecommend = (checked) => {
        this.setState({ isRecommend: checked });
        console.log(`switch to ${checked}`);
    }

    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ?
            (selectedTagList.filter(id => id !== tag_id)) :
            ([...selectedTagList, tag_id]);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
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

    handleBodyClicked = async (postId) => {
        if (this.state.clickedPostId === null) {
            this.setState({
                clickedPostId: postId
            })
        } else if (this.state.clickedPostId === postId){
            this.setState({
                clickedPostId: null
            })
        } else {
            this.setState({
                clickedPostId: postId
            })
        }

        let user = this.props.storedCurrentUser
        if (user.watchedPostList.length === 0
            || user.watchedPostList.filter(id => id === postId).length === 0) {
            user.watchedPostList.push(postId)
            this.props.onPutUser(user)
        }

    }

    handleLikeClicked = (post) => {
        let currentUser = this.props.storedCurrentUser;
        if (post.likingUserList.includes(currentUser.id)) {
            post.likingUserList = post.likingUserList.filter(id => id !== currentUser.id);
            this.props.onPutPost(post);
        } else {
            post.likingUserList.push(currentUser.id);
            this.props.onPutPost(post);
        }
    }

    returnLike = (post) => {
        if (post.likingUserList.includes(this.props.storedCurrentUser.id)) return "#eb2f96";
        else return "#808080";
    }

    handleCommentClicked = (postId) => {
        if (postId) this.props.onGetCommentList(postId);
        if (this.state.commentingPostId === null) {
            this.setState({
                commentingPostId: postId,
            })

        } else if (this.state.commentingPostId === postId){
            this.setState({
                commentingPostId: null,
            })

        // A 포스트의 코멘트가 토글 중일 때 B(current postId)를 토글
        } else {
            this.setState({
                commentingPostId: postId,
            });
        }
        // this.setState({ commentList: this.props.storedCommentList });
    }

    //FIXME: backend에서 코멘트 수정된 뒤 추가.
    // const showCommentList = () => {
    //     if (showComment) {
    //         return (
    //             <CommentList />
    //         )
    //     } else {
    //         return ({});
    //     }
    // }


    //FIXME: Infinite scroll to be implemented
    // handleInfiniteOnLoad = () => {
    //     let { activePostList } = this.state;
    //     this.setState({
    //         loading: true,
    //     });

    //     if (activePostList.length > 3) { // 길이 관련 손봐야함.
    //         message.warning('모든 포스트를 다 읽었습니다.');
    //         this.setState({
    //             hasMore: false,
    //             loading: false,
    //         });
    //         return;
    //     }

    //FIXME: Infinite scroll to be implemented
    //     this.fetchData(posts => {
    //         activePostList = activePostList.concat(posts);
    //         this.setState({
    //             activePostList,
    //             loading: false,
    //         });
    //     });
    // };

    //FIXME: Infinite scroll to be implemented
    // fetchData = callback => {
    //     reqwest({
    //         url: 'http://localhost:3000/api/post',
    //         type: 'json',
    //         method: 'get',
    //         contentType: 'application/json',
    //         success: res => {
    //             // console.log(res)
    //             callback(res);
    //         },
    //     });
    // };

    onEnterComment = (value) => {
        console.log("New comment: ", value);
        this.props.onCreateComment(this.state.commentingPostId, { content: value });
    }

    returnBodyFormat = (post, isWideFormat) => {
        if (isWideFormat) {
            // console.log("Wide post")
            return (
                <WidePostWrapper>
                    <WideImageContainer>
                        <img src={post.image} style={{ width: "100%" }} />
                    </WideImageContainer>
                    <WideContentsContainer style={{ width: "100%" }}>
                        {post.content}
                    </WideContentsContainer>
                </WidePostWrapper>
            );
        } else {
            // console.log("Narow post")
            return (
                <NarrowPostWrapper>
                    <NarrowContentsContainer style={{ width: "100%" }}>
                        {post.content}
                    </NarrowContentsContainer>
                    <NarrowImageContainer>
                        <img src={post.image} style={{ width: "100%" }} />
                    </NarrowImageContainer>
                </NarrowPostWrapper>
            );
        }
    }

    clickDeleteComment = (comment) => {
        this.props.onDeleteComment(comment);
    }
    returnDeleteButton = (comment) => {
        if (this.props.storedCurrentUser.id === comment.author) {
            return (
                <DeleteOutlined onClick={() => this.clickDeleteComment(comment)} size="large" style={{ cursor: "pointer" }} />
            );
        } else {
            return null;
        }
    }

    returnOnlineUser = (toFind) => {
        let toReturn = this.props.storedUserList.find(user => user.id===toFind).login
        if (toReturn == undefined) return false;
        else return toReturn
    }

    returnDisabled = (toFind) => {
        let first = this.props.storedCurrentUser.chatroom != -1
        // let second = this.props.storedUserList.find(user => user.id===item.author).chatroom != -1
        let findUser = this.props.storedUserList.find(user => user.id===toFind)
        if (findUser == undefined) {
            console.log(toFind)
         }
        let second = findUser.chatroom != -1
        // let third = this.props.storedUserList.find(user => user.id===toFind).login == false
        let third = findUser.login == false
        return (first || second || third)
    }

    render() {
        let { postList, isRecommend } = this.state;
        let user = null;
        let tagList = [];
        let tagToggle = [];
        let activePostList = [];

        // FIXME: Infinite scroll to be implemented
        console.log(this.props.storedPostList);

        if (this.props.storedUserList==undefined || this.props.storedUserList.undefined) this.props.onGetUserList();
        if (this.props.storedCurrentUser==undefined) this.props.onGetCurrentUser();
        else console.log(this.props.storedCurrentUser)

        if (this.props.storedCurrentUser && this.props.storedPostList && this.props.storedTagList) {
            user = this.props.storedCurrentUser;
            if(!user.login) return <Redirect to='/login'/>

            tagList = this.props.storedTagList;
            if (isRecommend) {
                // postList = this.props.storedPostList.filter(post => post.author !== user.id && !user.friendList.includes(post.author));
                postList = this.props.storedRecommendPostList;
            } else {
                postList = this.props.storedPostList.filter(post => user.friendList.includes(post.author));
            }
            console.log(postList);

            tagToggle = this.props.storedCurrentUser.tagList.map(tag_id => {
                return (
                    <GameTag
                        key={tag_id}
                        tagId={tag_id}
                        isChecked={this.state.selectedTagList.includes(tag_id)}
                        onClick={() => this.onToggleTag(tag_id)}
                    />
                );
            });

            // FIXME: Infinite scroll to be implemented
            // postList = this.props.storedPostList;
            activePostList = postList.filter(post => {
                return this.state.selectedTagList.includes(post.tag);
            }).slice(-15);
            console.log(activePostList);
        }
        if (this.state.commentingPostId && !this.props.storedCommentList) this.props.onGetCommentList(this.state.commentingPostId);
        return (
            <PostPageWrapper>
                <LineWrapper>
                    <GameTagWrapper>
                        <span style={{ marginRight: 8 }}>Your Games:</span>
                        {tagToggle.length > 0 ? tagToggle: "Add your Tag!"}
                    </GameTagWrapper>
                    <RecommendToggleWrapper>
                        {tagToggle.length > 0 ?
                            <Switch checkedChildren="Recommend" unCheckedChildren="Friend's Posts" defaultChecked onChange={this.onToggleRecommend}/>
                            : null
                        }
                    </RecommendToggleWrapper>
                </LineWrapper>

                <PostListWrapper>
                    {/*
                //FIXME: Infinite scroll to be implemented
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                */}
                    <List
                        dataSource={activePostList}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <PostContainer>
                                    <PostHeaderContainer>
                                        <AuthorItem onClick={() => this.props.history.push("/page/" + item.author)} style={{ cursor: "pointer" }} >
                                            <Author
                                                //FIXME: user로 넘기도록 수정해야함
                                                name={item.authorName}
                                                avatar={item.authorAvatar}
                                                showOnline={() => this.returnOnlineUser(item.author)}
                                            />
                                        </AuthorItem>
                                        <ButtonItem>
                                        <CSRFToken />
                                            <Button
                                                type="primary"
                                                shape="round"
                                                // disabled={this.props.storedCurrentUser.chatroom != -1
                                                // || this.props.storedUserList.find(user => user.id===item.author).chatroom != -1
                                                // || this.props.storedUserList.find(user => user.id===item.author).login == false}
                                                disabled={() => this.returnDisabled(item.author)}
                                                onClick={() => this.onClickShallWe(this.props.storedUserList.find(user => user.id===item.author), item.tag)}
                                                size="small"
                                                style={{ fontSize: 8, fontWeight: "bolder" }}
                                            >
                                                Shall We
                                            </Button>
                                        </ButtonItem>
                                        <GameTagItem>
                                            <GameTag
                                                key={item.tag}
                                                tagId={item.tag}
                                                isChecked={true}
                                            />
                                        </GameTagItem>
                                    </PostHeaderContainer>

                                    <Divider style={{ marginTop: 0, marginBottom: 10 }} />

                                    <PostBodyContainer onClick={() => this.handleBodyClicked(item.id)}>
                                        {this.returnBodyFormat(item, item.id===this.state.clickedPostId)}

                                    </PostBodyContainer>

                                    <Divider style={{ marginTop: 0, marginBottom: 10 }} />

                                    <PostFooterContainer>
                                        <IconContainer>
                                            <div>
                                                <Space>
                                                    <HeartTwoTone
                                                        onClick={() => this.handleLikeClicked(item)}
                                                        twoToneColor={this.returnLike(item)}
                                                    />
                                                    {item.likeNum}
                                                </Space>
                                            </div>
                                            <Divider
                                                type="vertical"
                                                style={{ alignSelf: "center", marginLeft: "10px", marginRight: "10px" }}
                                            />
                                            <div>
                                                <Space>
                                                    <MessageTwoTone
                                                        onClick={() => this.handleCommentClicked(item.id)}
                                                    />
                                                </Space>
                                            </div>
                                        </IconContainer>
                                        <CommentView
                                            commentingPostId={this.state.commentingPostId}
                                            currPost={item}
                                            userList={this.props.storedUserList}
                                            commentList={this.props.storedCommentList}
                                            currentUser={this.props.storedCurrentUser}
                                            onEnterComment={this.onEnterComment}
                                            returnDeleteButton={this.returnDeleteButton}
                                        />
                                    </PostFooterContainer>
                                </PostContainer>
                            </List.Item>
                        )}
                    >
                        {/* {this.state.loading && this.state.hasMore && (
                            <LoadingWrapper>
                                <Spin />
                            </LoadingWrapper>
                        )} */}
                    </List>
                    {/* </InfiniteScroll> */}
                </PostListWrapper>
            </PostPageWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedTagList: state.tg.tagList,
        storedPostList: state.ps.postList,
        storedSelectedPost: state.ps.selectedPost,
        storedCommentList: state.cm.selectedCommentList,
        storedUserList: state.ur.userList,
        storedUser: state.ur.selectedUser,
        storedRecommendPostList: state.ps.recommendPostList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onGetUser: (id) =>
            dispatch(actionCreators.getUser(id)),
        onPutUser: (user) =>
            dispatch(actionCreators.putUser(user)),
        onGetPostList: () =>
            dispatch(actionCreators.getPostList()),
        onPutPost: (post) =>
            dispatch(actionCreators.putPost(post)),
        onGetTagList: () =>
            dispatch(actionCreators.getTagList()),
        onGetCommentList: (id) =>
            dispatch(actionCreators.getCommentList(id)),
        onGetPost: (id) =>
            dispatch(actionCreators.getPost(id)),
        onGetUserList: () =>
            dispatch(actionCreators.getUserList()),
        onCreateComment: (postId, comment) =>
            dispatch(actionCreators.createComment(postId, comment)),
        onDeleteComment: (comment) =>
            dispatch(actionCreators.deleteComment(comment)),
        onSendShallWe: (newChatroom, sendingUser, receivingUser) =>
            dispatch(actionCreators.sendShallWe(newChatroom, sendingUser, receivingUser)),
        onRecommendPostList: () =>
            dispatch(actionCreators.recommendPostList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
