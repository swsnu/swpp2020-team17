import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Divider, Space, Button, Comment } from 'antd';
import { MessageTwoTone, HeartTwoTone, DeleteOutlined, RollbackOutlined } from '@ant-design/icons';
import * as actionCreators from '../../store/actions/index';
import styled, { keyframes } from 'styled-components';
import Author from '../../components/Author/Author'
import CommentView from '../../components/Comment/Comment';

/* Components */
import GameTag from '../../components/GameTag/GameTag'

const PostPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
    /* padding: 8px 24px; */
    height: 100%;
    
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

const LineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-self: center;
`;

const BackWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
    align-items: center;
`;

const DeleteWrapper = styled.div`
    display: flex;
    flex-basis: 40%;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    justify-content: flex-end;
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

class PostInUserPage extends Component {
    constructor(props) {
        super(props)
        this.props.onGetUserList();
        this.props.onGetCurrentUser();
        this.props.onGetPost(this.props.match.params.id);
        this.props.onGetCommentList(this.props.match.params.id);
        this.state = {
            post: this.props.storedSelectedPost,
        }
    }

    componentDidMount() {
        if (this.props.storedSelectedPost) this.setState({ post: this.props.storedSelectedPost });
    }

    returnLike = (post) => {
        console.log(post.likingUserList);
        if (post.likingUserList.includes(this.props.storedCurrentUser.id)) return "#eb2f96";
        else return "#808080";
    }
    
    handleLikeClicked = (post) => {
        console.log(post);
        let currentUser = this.props.storedCurrentUser;
        if (post.likingUserList.includes(currentUser.id)) {
            post.likingUserList = post.likingUserList.filter(id => id !== currentUser.id);
            this.props.onPutPost(post);
        } else {
            post.likingUserList.push(currentUser.id);
            this.props.onPutPost(post);
        }
    }

    clickDeleteComment = (comment) => {
        this.props.onDeleteComment(comment);
    }
    returnDeleteButton = (comment) => {
        if (this.props.storedCurrentUser.id === comment.author) {
            return (
                <DeleteOutlined onClick={() => this.clickDeleteComment(comment)} style={{ cursor: "pointer" }} />
            );
        } else {
            return null;
        }
    }

    onEnterComment = (value) => {
        console.log("New comment: ", value);
        this.props.onCreateComment(this.props.match.params.id, { content: value });
    }

    handleBackButton = (author) => {
        if (author === this.props.storedCurrentUser.id) this.props.history.push('/myPage');
        else this.props.history.push('/page/' + author);
    }

    handleDeleteButton = (item) => {
        this.props.onDeletePost(item.id);
        this.handleBackButton(item.author);
    }
    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.storedSelectedPost);
        let { post } = this.state;
        let item, author;
        if (this.props.storedSelectedPost) {
            item = this.props.storedSelectedPost;
            author = this.props.storedUserList.find(user => user.id === item.author);
        } else this.props.onGetPost(this.props.match.params.id);
        if (!this.props.storedCommentList) this.props.onGetCommentList(this.props.match.params.id);

        if (item && author && item.likingUserList) {
            return (
                <PostPageWrapper>
                    <LineWrapper>
                        <BackWrapper>
                            <Button onClick={() => this.handleBackButton(item.author)}> 
                                <RollbackOutlined />
                                Back 
                            </Button>
                        </BackWrapper>
                        <DeleteWrapper>
                            {item.author === this.props.storedCurrentUser.id ?
                                <Button onClick={() => this.handleDeleteButton(item)}> 
                                    <DeleteOutlined />
                                    Delete 
                                </Button>
                                : null
                            }
                            
                        </DeleteWrapper>
                    </LineWrapper>
                    
                    
                    <PostListWrapper>
                        <PostContainer>
                            <PostHeaderContainer>
                                <AuthorItem onClick={() => this.handleBackButton(item.author)} style={{ cursor: "pointer" }} >
                                    <Author
                                        //FIXME: user로 넘기도록 수정해야함
                                        name={author.username}
                                        avatar={author.avatar}
                                        showOnline={true}
                                    />
                                </AuthorItem>
                                <ButtonItem>
                                    {item.author !== this.props.storedCurrentUser.id ?
                                        <Button
                                            type="primary"
                                            shape="round"
                                            onClick={() => this.onClickShallWe(item.author)}
                                            disabled={this.props.storedCurrentUser.chatroom != -1 || author.chatroom != -1 || !author.login}
                                            style={{ fontSize: 12, fontWeight: "bolder" }}
                                        >
                                            Shall We ?
                                        </Button>
                                        : null
                                    }
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
    
                            <WidePostWrapper>
                                <WideImageContainer>
                                    <img src={item.image} style={{ width: "100%" }} />
                                </WideImageContainer>
                                <WideContentsContainer style={{ width: "100%" }}>
                                    {item.content}
                                </WideContentsContainer>
                            </WidePostWrapper>
    
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
                                            <MessageTwoTone />
                                        </Space>
                                    </div>
                                </IconContainer>
                                <CommentView
                                    commentingPostId={item.id}
                                    currPost={item}
                                    userList={this.props.storedUserList}
                                    commentList={this.props.storedCommentList}
                                    currentUser={this.props.storedCurrentUser}
                                    onEnterComment={this.onEnterComment}
                                    returnDeleteButton={this.returnDeleteButton}
                                />
                            </PostFooterContainer>
                        </PostContainer>
                    </PostListWrapper>
                </PostPageWrapper>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedUserList: state.ur.userList,
        storedSelectedPost: state.ps.selectedPost,
        storedCommentList: state.cm.selectedCommentList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onGetUserList: () => 
            dispatch(actionCreators.getUserList()),
        onGetPost: (postId) =>
            dispatch(actionCreators.getPost(postId)),
        onPutPost: (post) =>
            dispatch(actionCreators.putPost(post)),
        onDeletePost: (postId) =>
            dispatch(actionCreators.deletePost(postId)),
        onGetCommentList: (id) =>
            dispatch(actionCreators.getCommentList(id)),
        onCreateComment: (postId, comment) =>
            dispatch(actionCreators.createComment(postId, comment)),
        onDeleteComment: (comment) =>
            dispatch(actionCreators.deleteComment(comment)),
        onSendShallWe: (newChatroom, sendingUser, receivingUser) =>
            dispatch(actionCreators.sendShallWe(newChatroom, sendingUser, receivingUser)),
        onGetTagList: () =>
            dispatch(actionCreators.getTagList()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostInUserPage)