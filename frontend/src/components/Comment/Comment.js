import React from 'react';
import { List, Comment, Input, Spin } from 'antd';
import styled, { keyframes } from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';

const CommentWrapper = styled.div``;
const CommentFormContainer = styled.div`
    flex-direction: row;
    margin-top: 10px;
`;
const CommentListContainer = styled.div``;

const onEnterComment = (value) => {
    console.log("New comment: ", value);

}

const CommentView = (props) => {
    const [onLoading] = React.useState(true);

    if (props.currPost && props.commentingPostId === props.currPost.id && props.commentList) {
        // console.log(commentList);
        // TODO: Show Form, commentList
        //console.log("isToggleComment start\n");
        //console.log(props.commentList);

        return (
            <CommentWrapper>
                <CommentFormContainer>
                    <Input.Search
                        placeholder = "Write comment..."
                        allowClear
                        enterButton="Enter"
                        size="middle"
                        onSearch={onEnterComment}
                    />
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

// import React, { Component } from 'react';
// import { List, Comment, Input, Spin } from 'antd';
// import styled, { keyframes } from 'styled-components';
// import { UserOutlined } from '@ant-design/icons';

// const CommentWrapper = styled.div``;
// const CommentFormContainer = styled.div`
//     flex-direction: row;
//     margin-top: 10px;
// `;
// const CommentListContainer = styled.div``;

// const onEnterComment = (value) => {
//     console.log("New comment: ", value);

// }
// class CommentView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             isLoading: false
//         })
//         console.log("****Hope to be done2");
//     }

//     showLoadingScreen = () => {
//         return (
//             <Spin />
//         )
//     }

//     showCommentView = () => {
//         if (this.props.currPost && this.props.commentingPostId === this.props.currPost.id && this.props.commentList) {
//             // console.log(commentList);
//             // TODO: Show Form, commentList
//             //console.log("isToggleComment start\n");
//             //console.log(props.commentList);
//             console.log("****Hope to be done1");

//             return (
//                 <CommentWrapper>
//                     <CommentFormContainer>
//                         <Input.Search
//                             placeholder="Write comment..."
//                             allowClear
//                             enterButton="Enter"
//                             size="middle"
//                             onSearch={onEnterComment}
//                         />
//                     </CommentFormContainer>
//                     <CommentListContainer style={{ width: "100%" }}>
//                         <List
//                             className="comment-list"
//                             itemLayout="horizontal"
//                             dataSource={this.props.commentList}
//                             renderItem={item => (
//                                 <li>
//                                     <Comment
//                                         avatar={this.props.userList.find(user => (user.id === item.author)).avatar ?
//                                             this.props.userList.find(user => (user.id === item.author)).avatar
//                                             : <UserOutlined />}
//                                         author={this.props.userList.find(user => (user.id === item.author)).username}
//                                         content={item.content}
//                                     />
//                                 </li>
//                             )}
//                         />
//                     </CommentListContainer>
//                 </CommentWrapper>
//             );
//         } else {
//             // Show nothing
//             // console.log("Show nothing");
//             return (
//                 <div>
//                 </div>
//             );
//         }
//     }

//     render() {
//         console.log("****Hope to be done0");
//         const loadingPanel = this.showLoadingScreen();
//         const commentPanel = this.showCommentView();
//         return (
//             this.state.isLoading ? loadingPanel : commentPanel
//         )
//     }
// }

// export default CommentView;
