import React, { Component } from 'react';

class PostInUserPage extends Component {
    constructor(props){
        super(props)
        this.props.onGetCurrentUser();
        this.props.onGetPostList();
        this.state = {
            myPostList: [],
            height: 0,
            myGrids: [],
            selectedTagList: [],
            activeIndex: 0,
            isOpen: false
        }
    }

    render() {

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


export default connect(mapStateToProps, mapDispatchToProps)(PostInUserPage)