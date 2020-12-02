import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Gallery from "react-photo-gallery";
import { Row, Col, Image } from 'antd';
import { photos } from "./photos";

class GridPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            myPostList: [],
            height: 0,
            myGrids: [],

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
        let { myPostList, myGrids } = this.state
        myPostList = this.props.storedPostList.filter(post => post.author == this.props.storedCurrentUser.id)
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
            <div>
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