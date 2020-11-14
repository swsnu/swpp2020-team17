import React, { useState } from 'react';
import CommentSection from "../PopComment/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
// import TagsInput from "../../components/Tag/TagsInput"
import {Button} from 'antd';
import './MainPost.css';

const MainPost = props => {
    const [likes, setLikes] = useState(
        props.dataFromParent.likes
    );
    // const selectedTags = ['Lol'];

    const incrementLike = () => {
        setLikes(likes => likes + 1);
    };
    return (
        <div className="post-border">
            <PostHeader
                username={
                    props.dataFromParent.username
                }
                thumbnailUrl={
                    props.dataFromParent.thumbnailUrl
                }
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={props.dataFromParent.imageUrl}
                />
            </div>
            <LikeSection
                incrementLike={incrementLike}
                likes={likes}
            />
            <CommentSection
                postId={
                    props.dataFromParent.imageUrl
                }
                comments={
                    props.dataFromParent.comments
                }
            />
        </div>
    );
};

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