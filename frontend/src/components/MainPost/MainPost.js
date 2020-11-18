import React, { useEffect, useState, Component } from 'react';
import CommentSection from "../PopComment/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
// import TagsInput from "../../components/Tag/TagsInput"
import {Button} from 'antd';
import './MainPost.css';

const MainPost = (props) => {

    useEffect(() =>  {
        props.getPostComment(props.dataFromParent.id);
        //
    }, [])
    
    const [likes, setLikes] = useState(
        props.dataFromParent.likes
    );
    // const selectedTags = ['Lol'];

    const incrementLike = () => {
        setLikes(likes => likes + 1);
    };

    const dispatch = useDispatch();

    return (
        <div className="post-border">
            <PostHeader
                username={
                    props.dataFromParent.author_name
                }
                thumbnailUrl={
                    props.dataFromParent.thumbnailUrl
                }
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={props.dataFromParent.image}
                />
            </div>
            <LikeSection
                incrementLike={incrementLike}
                likes={likes}
            />
            <CommentSection
                postId={
                    props.key
                }
                commentList={
                    props.commentList
                }
            />
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getPostComment: (id) => {
//         dispatch(actionCreators.getPostComment(id))
//       }
//     }
//   }
  
//   const mapStateToProps = (state) => {
//     return {
//       ...state,
//       commentList: state.ps.commentList
//     }
//   }
  
  export default MainPost;

// class Post extends Component {

//     shallwehandler = () => {

//     }

//     likehandler = () => {

//     }

//     commenthandler=() => {

//     }

//     render() {
//         return (
//             <div className="MainPost">
//                 <div className="shallWe">
//                     <button onClick={this.shallwehandler}>shallWe</button>
//                 </div> 
//                 <div className="like">
//                     <button onClick={this.likehandler}>Like</button>
//                 </div> 
//                 <div className="comment">
//                     <button onClick={this.commenthandler}>Comment</button>
//                 </div> 
//                 <div className="image">Image</div>
//                 <div className="content">Content</div>
//             </div>
//         )
//     }
// }

// export default Post