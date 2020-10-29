import React, { Component } from 'react';


class Post extends Component {
    
    shallwehandler = () => {

    }

    likehandler = () => {

    }

    render() {
        return (
            <div>
                    <button className="ShallWeBtn" onClick={this.shallwehandler}>Shall We Game?</button>
                    <div>Picture</div>
                    <div>Content</div>
                    <button className="LikeBtn" onClick={this.likehandler}>Like</button>
            </div>
        )
    }
}

export default Post