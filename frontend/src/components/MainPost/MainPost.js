import React, { Component } from 'react';
import './MainPost.css';

class Post extends Component {
    
    shallwehandler = () => {

    }

    likehandler = () => {

    }

    commenthandler=() => {

    }

    render() {
        return (
            <div className="MainPost">
                <div className="shallWe">
                    <button onClick={this.shallwehandler}>shallWe</button>
                </div> 
                <div className="like">
                    <button onClick={this.likehandler}>Like</button>
                </div> 
                <div className="comment">
                    <button onClick={this.commenthandler}>Comment</button>
                </div> 
                <div className="image">Image</div>
                <div className="content">Content</div>
            </div>
        )
    }
}

export default Post