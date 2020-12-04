import React from 'react';
import { List, Comment } from 'antd';
import styled, { keyframes } from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const CommentWrapper = styled.div``;
const CommentFormContainer = styled.div``;
const CommentListContainer = styled.div``;

const CommentView = (props) => {
    if (props.currPost && props.commentingPostId === props.currPost.id && props.commentList) {
        // console.log(commentList);
        // TODO: Show Form, commentList
        //console.log("isToggleComment start\n");
        //console.log(props.commentList);

        return (
            <CommentWrapper>
                <CommentFormContainer>
                </CommentFormContainer>
                <CommentListContainer style={{ width: "100%" }}>
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={props.commentList}
                        renderItem={item => (
                            <li>
                                <Comment
                                    avatar={props.userList.find(user => (user.id === item.author)).avatar?
                                        props.userList.find(user => (user.id === item.author)).avatar
                                        : <UserOutlined />}
                                    author={props.userList.find(user => (user.id === item.author)).username}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </CommentListContainer>
            </CommentWrapper>
        );
    } else {
        // Show nothing
        // console.log("Show nothing");
        return (
            <div>
            </div>
        );
    }
};
  


export default CommentView;