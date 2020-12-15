import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Divider, Space, Button, Comment } from 'antd';
import { MessageTwoTone, HeartTwoTone, DeleteOutlined } from '@ant-design/icons';
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
        this.props.onGetCurrentUser();
        this.props.onGetPost(this.props.match.params.id);
        this.state = {
            
        }
    }

    render() {
        let item = this.props.storedSelectedPost;
        return (
            <PostPageWrapper>
                <PostListWrapper>
                    <PostContainer>
                        <PostHeaderContainer>
                            <AuthorItem onClick={() => this.props.history.push("/page/" + item.author)} style={{ cursor: "pointer" }} >
                                <Author
                                    //FIXME: user로 넘기도록 수정해야함
                                    name={item.authorName}
                                    avatar={item.authorAvatar}
                                    showOnline={true}
                                />
                            </AuthorItem>
                            <ButtonItem>
                                <Button
                                    type="primary"
                                    shape="round"
                                    onClick={() => this.onClickShallWe(item.author)}
                                    disabled={item.author == this.props.currentUser.id}
                                    style={{ fontSize: 12, fontWeight: "bolder" }}
                                >
                                    Shall We ?
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
                </PostListWrapper>
            </PostPageWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedSelectedPost: state.ps.selectedPost,
        storedCommentList: state.cm.selectedCommentList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onGetPost: (postId) =>
            dispatch(actionCreators.getPost(postId)),
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