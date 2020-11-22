import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
    const [commentList] = useState(props.commentList)
    const [postID] = useState(props.postID)
    const [commentInput] = useState('')
    console.log(commentInput)
    return (
        <div>
            {/* map through the comments data and return the Comment component */}
            {commentList.map((comment, index) => <Comment key={index} comment={comment} />)}
            <CommentInput comment={commentInput}/>
            <button className='button'>Add</button>
        </div>
    );
}


export default CommentSection;
