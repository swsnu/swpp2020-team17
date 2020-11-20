import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
    const [commentList] = useState(props.commentList)
    const [postID] = useState(props.postID)
    return (
        <div>
            {/* map through the comments data and return the Comment component */}
            {commentList.map((comment, index) => <Comment key={index} comment={comment} />)}
            <CommentInput />
        </div>
    );
}


export default CommentSection;
