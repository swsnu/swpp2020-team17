import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Gallery from "react-photo-gallery";
import { Row, Col, Image } from 'antd';
import { withRouter } from 'react-router-dom'

class PostInGrid extends Component {
    constructor(props){
        super(props)
        this.props.onGetCurrentUser();
        this.props.onGetPostList();
        const postId = this.props.history.location.pathname.replace('/post/', '');
        this.state = {
            myPostList: [],
            height: 0,
            myGrids: [],
            selectedTagList: [],
            activeIndex: 0,
            isOpen: false
        }
    }

    onClickImage() {

    }
    
    // state = {
    //     myPostList: [],
    //     height: 0,
    //     myGrids: [],
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.storedPostList.length != this.props.storedPostList.length) {
    //         this.setState({
    //             myPostList: this.props.storedPostList.filter(post => post.author == this.props.storedCurrentUser.id),
    //         })
    //     }
    // }


    render() {
        let { myPostList, myGrids, selectedTagList } = this.state;
        selectedTagList = this.props.selectedTagList;
        myPostList = this.props.storedPostList.filter(post => 
            (post.author == this.props.storedCurrentUser.id) && (selectedTagList.includes(post.tag)))
        myGrids = [];
        if (myPostList.length != myGrids.length) {
            for (let i = 0; i < myPostList.length; i++) {
                myGrids.push({
                    key: i.toString(),
                    src: myPostList[i].image,
                    width: 4,
                    height: 3
                })
            }
        }
        return (
            <div className="PostInGrid">
                {myGrids.length != 0 ? <Gallery photos={myGrids} direction={"column"}
                onClick={(e, { index }) => this.props.history.push('/post/' + myPostList[index].id)} /> : ''}
            </div> 
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
        storedPostList: state.ps.postList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onGetPostList: () =>
            dispatch(actionCreators.getPostList()),
        onPutPost: (id, post) =>
            dispatch(actionCreators.putPost(id, post)),
        onDeletePost: (id) =>
            dispatch(actionCreators.deletePost(id))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostInGrid))