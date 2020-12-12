import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Gallery from "react-photo-gallery";
import { Row, Col, Image } from 'antd';

class GridPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            myPostList: [],
            height: 0,
            myGrids: [],
            selectedTagList: [],
        }
    }
    
    // state = {
    //     myPostList: [],
    //     height: 0,
    //     myGrids: [],
    // }

    // componentDidUpdate(prevState) {
    //     if (prevState.myPostList.length != this.state.myPostList.length) {
    //     this.setState({
    //         myPostList: this.props.storedPostList.filter(post => post.author == this.props.storedCurrentUser.id),
    //     })
    // }
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
            <div className="GridPost">
                {myGrids.length != 0 ? <Gallery photos={myGrids} direction={"column"} /> : ''}
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GridPost)