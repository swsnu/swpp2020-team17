import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import { withRouter } from 'react-router';
import MenuBar from '../../components/MenuBar/MenuBar'
import './MyPage.css'

class MyPage extends Component {

    state= {
        ID: '',
        FriendIDList: [],
        RoomID: '',
        userName: '',
        profilePicture: '',
        postIDList: '',
        ShallWeRoomList: [],
        watchedPostedIDList: [],
        isOnline: false
    }

    componentDidMount() {
        this.setState({
            ID: this.props.user.ID,
            FriendIDList: this.props.user.FriendIDList,
            RoomID: this.props.user.RoomID,
            userName: this.props.user.userName,
            profilePicture: this.props.user.profilePicture,
            postIDList: this.props.user.postIDList,
            ShallWeRoomList: this.props.user.ShallWeRoomList,
            watchedPostedIDList: this.props.user.watchedPostedIDList,
            isOnline: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
       // Friend의 온라인 상태 여부 확인 (Friend 구현 후 작성)
    }

    onClickPost() {
        //- PostInGrid popup (PostInGrid 구현 후 작성)
    }

    onClickCreatePost() {
        this.props.history.push('/post/create/')
    }

    onClickTag() {
        this.props.changeTagState()
    }

    render() {
        return(
            <div>
                    <div className="menuArea">{  <MenuBar />  }</div>
                    <div className="leftArea">
                    <div className="profileArea">profile{ /* <Profile /> */ }</div>
                
                <div className="friendsArea">friends{ /* <Friends /> */ }</div>
                </div>
                <div className="tagArea">tag{ /* <Tag onClick={() => this.onClickTag/> */ }</div>
                <button className="createPost" onClick={() => this.onClickCreatePost}>create post</button>
                <div className="postArea" onClick={() => this.onClickPost}>posts { /* <PostInGrid /> */ } </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.ur.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //createPost: (id) => {
        //    return dispatch(actionCreators.createPost(id))
        //}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)