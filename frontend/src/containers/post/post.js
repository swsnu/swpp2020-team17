import React, { Component } from 'react';
import MainPost from '../../components/MainPost/MainPost'


class Post extends Component {


    render() {
        return (
            <div>
                <div className="Menu"></div>
                <div className="TagWrapper"></div>
                <div className="MainPostWrapper">
                    <MainPost></MainPost>
                </div>
            </div>
        )
    }
}

export default Post