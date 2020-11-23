import React, { useEffect, useState, Component } from 'react';
import CommentSection from "../PopComment/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { getCommentList } from '../../store/actions/index'
// import TagsInput from "../../components/Tag/TagsInput"
import {Button} from 'antd';
import './MainPost.css';
import useSelection from 'antd/lib/table/hooks/useSelection';

const MainPost = (props) => {

    const commentList = useSelector((state) => state.ps.commentList)
    
    const [likes, setLikes] = useState(
        props.dataFromParent.likes
    );

    // const selectedTags = ['Lol'];
    const incrementLike = () => {
        setLikes(likes => likes + 1);
    };

    const dispatch = useDispatch();

    const postCommentList = commentList.filter(comment => comment.post == props.dataFromParent.id)

    return (
        <div className="post-border">
            <PostHeader
                username={
                    props.dataFromParent.author_name
                }
                thumbnailUrl={
                    props.dataFromParent.author_avatar
                }
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={props.dataFromParent.image}
                />
            </div>
            <div className="post-content-wrapper">
            <p> {props.dataFromParent.content} </p>
            </div>
            <LikeSection
                incrementLike={incrementLike}
                likes={likes}
            />
            <CommentSection
                postID={
                    props.dataFromParent.id
                }
                commentList={
                    postCommentList
                }
            />
        </div>
    );
};

  export default MainPost;
