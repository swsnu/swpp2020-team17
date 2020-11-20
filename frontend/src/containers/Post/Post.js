import React, { Component, useEffect, useState } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';
import dummyData from "./dummy-data.js";
import { GetCommentList } from '../../store/actions/actionTypes';

// import * as userAPI from '../../store/actions/user'


class Post extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getPostList();
    this.props.getCommentList();
    console.log(this.props.commentList)
  }


  // Redirect removed
  render() {
    let commentList = this.props.commentList
    let posts = this.props.postList.map((post, index) => {
      return (
          <MainPost key={index} dataFromParent={post}/>
      )
    })


    return (
      <div>
        <button className="CreatePost" onClick={() => this.props.history.push('/createPost/')}>Create Post</button>

        <div className="MainPostWrapper">
          {posts}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => {
      dispatch(actionCreators.getCurrentUser())
    },

    getPostList: () => {
      dispatch(actionCreators.getPostList())
    },

    getCommentList: () => {
      dispatch(actionCreators.getCommentList())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.ur.currentUser,
    postList: state.ps.postList,
    commentList: state.ps.commentList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);