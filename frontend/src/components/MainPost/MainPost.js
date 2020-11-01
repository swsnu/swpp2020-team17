import React, { Component } from 'react';


class Post extends Component {
    
    shallwehandler = () => {

    }

    likehandler = () => {

    }

    render() {
        return (
            <div>
                    <button className="ShallWe-Button" onClick={this.shallwehandler}>Shall We Game?</button>
                    <div>Picture</div>
                    <div>Content</div>
                    <button className="Like-Button" onClick={this.likehandler}>Like</button>
            </div>
        )
    }
}

export default Post