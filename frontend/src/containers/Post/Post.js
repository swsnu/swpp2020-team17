import React, { Component } from 'react';
import MainPost from '../../components/MainPost/MainPost'
import MenuBar from '../../components/MenuBar/MenuBar'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';

// import * as userAPI from '../../store/actions/user'

class Post extends Component {
    componentDidMount() {
      this.props.getUserInfo();
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
      getUserInfo: () => {
        dispatch(actionCreators.getUserInfo())
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      currentUser: state.ur.currentUser,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Post);