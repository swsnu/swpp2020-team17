import React, { useState } from 'react';

const CommentInput = props => {
    useState()
    submitComment = e => {
        e.preventDefault();
        props.onSubmit(text)
    }

    return (
        <form className="comment-form" onSubmit={props.submitComment}>
            <input
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={() => props.changeComment()}
            />
        </form>
    );
};

export default CommentInput;
