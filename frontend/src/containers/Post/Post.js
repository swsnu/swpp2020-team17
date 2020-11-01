import React, { Component } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import MenuBar from '../../components/MenuBar/MenuBar'

class Post extends Component {


    render() {
        return (
            <div>
                <div className="Menu"></div>
                <MenuBar></MenuBar>
                <div className="TagWrapper"></div>
                <div className="MainPostWrapper">
                    <MainPost></MainPost>
                </div>
            </div>
        )
    }
}

export default Post