import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Divider, Space, Button, Switch } from 'antd';
import { MessageTwoTone, HeartTwoTone, DeleteOutlined } from '@ant-design/icons';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import CSRFToken from '../../csrftoken'
/* Components */
import GameTag from '../../components/GameTag/GameTag';
import Author from '../../components/Author/Author';
import CommentView from '../../components/Comment/Comment';

import {Redirect} from 'react-router-dom';

const PostPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
    /* padding: 8px 24px; */
    height: 100%;
`;

//TODO: 가운데 공백 둬서 꽉차게
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

const PostListWrapper = styled.div`
align-self: center;
display: flex;
/* justify-items: center;
justify-self: center; */
/*Responsive Styles*/
/* Smartphones (portrait) ---------------- */
@media only screen
and (max-width : 320px)
{
/* Add Your CSS Styling Here */
align-items: center;
}

/* Smartphones (landscape) ---------------- */
@media only screen
and (min-width : 321px)
and (max-width : 767px)
{
/* Add Your CSS Styling Here */
align-items: center;
}

/* Tablets (portrait) -------------------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait)
{
/* Add Your CSS Styling Here */
align-items: center;
}

/* Tablets (landscape) ------------------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape)
{
/* Add Your CSS Styling Here */
    width: 90%;
align-items: center;
}
/* Old Desktops and laptops ------------------ */

@media only screen
and (min-width : 1025px)
{
/* Add Your CSS Styling Here */
    width: 80%;
align-items: center;
}

/* Desktops ------------------ */
@media only screen
and (min-width : 1201px)
{
/* Add Your CSS Styling Here */
    width: 70%;
align-items: center;
}
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 15px;
    width: 100%;
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
    // old start
    flex-wrap: wrap;
    flex-basis: 100%;
    word-break: break-all;
    word-wrap: normal;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    // old end

    // new start
    // new end

    // new start
    /* max-height: 6em;
    overflow: hidden;
    position: relative;
    display: block;
    line-height: 1.5em;
    outline: solid 1px red;
    background-color: white; */
    // new end

    // old * 2
    /* flex-grow:2; */
    /* word-wrap: "true"; */
    /* display: inline-flex; */
    /* flex-basis: 70%; */
`;

const WideImageContainer = styled.div`
    /* flex-grow:1; */
    flex-basis:1000%;
    min-height: 1px;
    margin-left: 40px;
    margin-right: 40px;
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
    // old start
    /* flex-wrap: wrap */
    flex-basis: 70%;
    word-break: break-word;
    word-wrap: normal;
    overflow-y: auto;
    height: 100px;
    margin-top: 10px;
    margin-left: 25px;
    margin-right: 25px;
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
        }
        this.props.onGetCurrentUser();
        this.props.onGetUserList();
        this.props.onGetPostList();
        this.props.onGetTagList();
        this.props.onRecommendPostList();
    }

    componentDidMount() {
        if (this.props.storedCurrentUser) {
            this.setState({
                selectedTagList: this.props.storedCurrentUser.tagList,
                activePostList: this.props.storedPostList
            });
        }
    }
    onToggleRecommend = (checked) => {
        this.setState({ isRecommend: checked });
        //console.log(`switch to ${checked}`);
    }

    onToggleTag = (tag_id) => {
        const checked = this.state.selectedTagList.indexOf(tag_id) > -1;
        const { selectedTagList } = this.state;
        const nextSelectedTags = checked ?
            (selectedTagList.filter(id => id !== tag_id)) :
            ([...selectedTagList, tag_id]);
        //console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTagList: nextSelectedTags });
    }

    async onClickShallWe(receivingUser, tagId) {
        //console.log("shallWe");
        let newChatroom = {
            isGlobal: false,
            title: this.props.storedCurrentUser.username + '_s Shall We to ' + receivingUser.username,
            tag: tagId,   
            maxPersonnel: 2,
            discordLink: null,
        }
        //console.log(receivingUser);
        let sendingUser = this.props.storedCurrentUser;
        await this.props.onSendShallWe(newChatroom, sendingUser, receivingUser);
        if(sendingUser.chatroom !== -1) {
            this.props.history.push('/chatroom/' + sendingUser.chatroom);
        }
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
    }

    onEnterComment = (value) => {
        //console.log("New comment: ", value);
        this.props.onCreateComment(this.state.commentingPostId, { content: value });
    }

    returnBodyFormat = (post, isWideFormat) => {
        if (isWideFormat) {
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
            return (
                <NarrowPostWrapper>
                    <NarrowContentsContainer style={{ width: "100%" }}>
                        <div className="content">
                            {post.content}
                        </div>
                    </NarrowContentsContainer>
                    <NarrowImageContainer>
                        <img src={post.image} style={{ width: "100%" }} alt="profile"/>
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
                <DeleteOutlined 
                    className="delete-button"
                    onClick={() => this.clickDeleteComment(comment)} 
                    size="large" style={{ cursor: "pointer" }} 
                />
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
        let first = this.props.storedCurrentUser.chatroom !== -1
        let findUser = this.props.storedUserList.find(user => user.id===toFind)
        if (findUser === undefined) {
            //console.log(toFind)
         }
        let second = findUser.chatroom !== -1
        let third = findUser.login === false
        return (first || second || third)
    }

    render() {
        let { postList, isRecommend } = this.state;
        let user = null;
        let tagToggle = [];
        let activePostList = [];

        //console.log(this.props.storedPostList);

        if (this.props.storedUserList==undefined || this.props.storedUserList.undefined) this.props.onGetUserList();
        if (this.props.storedCurrentUser==undefined) this.props.onGetCurrentUser();
        else console.log(this.props.storedCurrentUser)

        if (this.props.storedCurrentUser && this.props.storedPostList && this.props.storedTagList) {
            user = this.props.storedCurrentUser;
            if(!user.login) return <Redirect to='/login'/>
            if (isRecommend) {
                postList = this.props.storedRecommendPostList;
            } else {
                postList = this.props.storedPostList.filter(post => user.friendList.includes(post.author));
            }
            //console.log(postList);

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

            activePostList = postList.filter(post => {
                return this.state.selectedTagList.includes(post.tag);
            }).slice(-15);
            //console.log(activePostList);
        }
        if (this.state.commentingPostId && !this.props.storedCommentList) this.props.onGetCommentList(this.state.commentingPostId);
        return (
            <div className="Post">
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
                    <List
                        dataSource={activePostList}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <PostContainer>
                                    <PostHeaderContainer>
                                        <AuthorItem 
                                            className="avatar-redirect"
                                            onClick={() => this.props.history.push("/page/" + item.author)} 
                                            style={{ cursor: "pointer" }} 
                                        >
                                            <Author
                                                name={item.authorName}
                                                avatar={item.authorAvatar}
                                                showOnline={() => this.returnOnlineUser(item.author)}
                                            />
                                        </AuthorItem>
                                        <ButtonItem>
                                        <CSRFToken />
                                            <Button
                                                className="shallWe-button"
                                                type="primary"
                                                shape="round"
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

                                    <PostBodyContainer 
                                        className="click-post"
                                        onClick={() => this.handleBodyClicked(item.id)}
                                    >
                                        {this.returnBodyFormat(item, item.id===this.state.clickedPostId)}

                                    </PostBodyContainer>

                                    <Divider style={{ marginTop: 0, marginBottom: 10 }} />

                                    <PostFooterContainer>
                                        <IconContainer>
                                            <div>
                                                <Space>
                                                    <HeartTwoTone
                                                        className="toggle-like"
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
                                                        className="click-comment"
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
                    </List>
                </PostListWrapper>
            </PostPageWrapper>
            </div>
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
        storedRecommendPostList: state.ps.recommendPostList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
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
