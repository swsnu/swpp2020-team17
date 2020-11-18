import React, { Component, useEffect, useState } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';
import dummyData from "./dummy-data.js";

// import * as userAPI from '../../store/actions/user'


class Post extends Component {

  componentDidMount() {
    this.props.getPostList();
    this.props.getCurrentUser();
    console.log(this.props)
  }


  // Redirect removed
  render() {
    let posts = this.props.postList.map((post, index) => {
      return (
        <div className="MainPostWrapper">
          <MainPost key={index} dataFromParent={post} />
        </div>
      )
    })


    return (
      <div>
        <div className="TagWrapper"></div>

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
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.ur.currentUser,
    postList: state.ps.postList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);