import React, { Component } from 'react';
import SearchedTag from '../../components/SearchedTag/SearchedTag';
import SearchedUser from '../../components/SearchedUser/SearchedUser';
import SearchBar from '../../components/SearchBar/SearchBar';
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import CSRFToken from '../../csrftoken'

class Search extends Component {
    
    componentDidMount() {
        this.props.onGetUserList();
        this.props.onGetTagList();
        this.props.onGetUserInfo();
    }
    onSearch = {};

    state = {
        searchInput: '',
    }

    render() {
        let users = []
        let tags = []
        if (this.props.storedUserList && this.props.storedCurrentUser && this.props.TagList) {
            users = this.props.storedUserList.map(user => {
                console.log(user.username);
                if (user.username.includes(this.state.searchInput)) {
                    let addOrDelete = 'add';
                    if (user.friendList.find(id => id==this.props.storedCurrentUser.id) != null) addOrDelete = 'delete'
                    return <SearchedUser username={user.username} addOrDelete={addOrDelete}/>
                }
            });
    
            tags = this.props.storedTagList.map(tag => {
                if (tag.name.includes(this.state.searchInput)) {
                    let addOrDelete = 'add';
                    if (this.props.storedCurrentUser.tagList.find(id => id==tag.id) != null) addOrDelete = 'delete'
                    return <SearchedTag tagname={tag.name} addOrDelete={addOrDelete} />
                }
            });
            console.log(storedUserList);
            console.log(storedTagList);
        }

        return (
            <div className="Search">
                <CSRFToken />
                <SearchBar
                    onSearch={this.onSearch}
                />
                <div className="searchedTag"> {tags} </div>
                <div className="searchedUser"> {users} </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedUserList: state.ur.userList,
        storedTagList: state.tg.tagList,
        storedCurrentUser: state.ur.currentUser,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserList: () =>
            dispatch(actionCreators.getUserList()),
        onGetTagList: () =>
            dispatch(actionCreators.getTagList()),
        onGetUserInfo: () =>
            dispatch(actionCreators.getUserInfo()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);