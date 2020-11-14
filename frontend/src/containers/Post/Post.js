import React, { Component, useState } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';
import dummyData from "./dummy-data.js";

// import * as userAPI from '../../store/actions/user'


const Post = (props) => {

  const [posts] = useState(dummyData);

// Redirect removed
  return (
      <div>
      <div className="TagWrapper"></div>

      <div className="MainPostWrapper">
        {posts.map(p => (
          <MainPost key={p.imageUrl} dataFromParent={p} />
        ))}

      </div>
      </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUser: () => {
        dispatch(actionCreators.getCurrentUser())
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
        currentUser: state.ur.currentUser,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Post);