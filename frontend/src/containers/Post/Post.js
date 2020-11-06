import React, { Component } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import MenuBar from '../../components/MenuBar/MenuBar'
import {Redirect} from 'react-router-dom';

class Post extends Component {


    render() {
        return (
            <div>
                {Redirect}
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

export default Post;