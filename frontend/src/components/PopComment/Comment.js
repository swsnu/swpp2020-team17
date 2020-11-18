import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment-text">
            <span className="user">{props.comment.author_name}</span>
            {' '}
            <span className="comment">{props.comment.content}</span>
        </div>
    );
};


export default Comment;
