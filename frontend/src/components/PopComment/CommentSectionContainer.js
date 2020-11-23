import React, { useEffect, useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import { createComment } from '../../store/actions/index'
import './Comment.css';
import { useDispatch } from 'react-redux';

const CommentSection = (props) => {
    const dispatch = useDispatch()
    const [commentList] = useState(props.commentList)
    const [postID] = useState(props.postID)
    const [comment, changeComment] = useState('')
    return (
        <div>
            {/* map through the comments data and return the Comment component */}
            {commentList.map((comment, index) => <Comment key={index} comment={comment} />)}
            <CommentInput comment={comment} changeComment={
                changeComment
            } />
            <button className='add-comment-button' onClick={() => {
                changeComment('')
                dispatch(createComment({content: comment}, postID))
            }
            }>Add</button>
        </div>
    );
}


export default CommentSection;
