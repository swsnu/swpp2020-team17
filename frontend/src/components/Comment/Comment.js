import React from 'react';
import { List, Comment, Input, Button } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useHistory } from 'react-router';

const CommentWrapper = styled.div``;
const CommentFormContainer = styled.div`
    flex-direction: row;
    margin-top: 10px;
`;
const CommentListContainer = styled.div``;

const CommentContainer = styled.div`
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

const CommentLeftContainer = styled.div`
    display: flex;
    /*flex-direction: column;*/
    flex-basis: 80%;
    align-items: center;
`;

const CommentRightContainer = styled.div`
display: flex;
    /*flex-direction: column;*/
    flex-basis: 10%;
    align-items: center;
    /* justify-content: space-between; */
    /* cursor: pointer; */ 
`;

const CommentView = (props) => {
    const [onLoading] = React.useState(true);
    const history = useHistory();
    
    if (props.currPost && props.commentingPostId === props.currPost.id && props.commentList) {
        return (
            <div className="Comment">
            <CommentWrapper>
                <CommentFormContainer>
                    <Input.Search
                        placeholder = "Write comment..."
                        allowClear
                        enterButton="Enter"
                        size="middle"
                        onSearch={props.onEnterComment}
                    />
                </CommentFormContainer>
                <CommentListContainer style={{ width: "100%" }}>
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={props.commentList}
                        renderItem={item => (
                                <CommentContainer>
                                <CommentLeftContainer>
                                    <Comment
                                        avatar={props.userList.find(user => (user.id === item.author)).avatar ?
                                            <Avatar 
                                                className="avatar"
                                                onClick={() => {
                                                    if (item.author === props.currentUser.id) history.push("/myPage/");
                                                    else history.push("/page/" + item.author);
                                                }}
                                                style={{ backgroundColor: '#1A516E' }} 
                                                src={props.userList.find(user => (user.id === item.author)).avatar} />
                                            : <Avatar 
                                                className="avatar"
                                                onClick={() => {
                                                    if (item.author === props.currentUser.id) history.push("/myPage/");
                                                    else history.push("/page/" + item.author);
                                                }}
                                                icon={<UserOutlined />} />}
                                        author={props.userList.find(user => (user.id === item.author)).username}
                                        content={item.content}
                                    />
                                </CommentLeftContainer>
                                <CommentRightContainer>
                                    {props.returnDeleteButton(item)}
                                </CommentRightContainer>
                                </CommentContainer>

                    
                        )}
                    />
                </CommentListContainer>
            </CommentWrapper>
            </div>
        );
    } else {
        // Show nothing
        console.log("Show nothing");
        return (
            <div className="Comment">
            </div>
        );
    }
};


export default CommentView;