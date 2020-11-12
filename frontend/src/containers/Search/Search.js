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
        this.props.onGetCurrentUser();
    }
    onSearch = value => {
        if (value != '') this.setState({ searchInput: value.toLowerCase() });
        else this.setState({ searchInput: null });
    };

    state = {
        searchInput: null,
    }

    render() {
        let users = []
        let tags = []
        
        if (this.state.searchInput != null) {
            if (this.props.storedCurrentUser && this.props.storedUserList && this.props.storedTagList)  {
                users = this.props.storedUserList.map(user => {
                    if (user.ID == this.props.storedCurrentUser.ID) return;
                    if (user.username.toLowerCase().includes(this.state.searchInput)) {
                        let addOrDelete = 'add';
                        if (user.friendList.find(ID => ID===this.props.storedCurrentUser.ID) != null) addOrDelete = 'delete'
                        return <SearchedUser username={user.username} addOrDelete={addOrDelete}/>
                    }
                    return;
                });
                tags = this.props.storedTagList.map(tag => {
                    if (tag.name.toLowerCase().includes(this.state.searchInput)) {
                        let addOrDelete = 'add';
                        if (this.props.storedCurrentUser.tagList.find(ID => ID===tag.ID) != null) addOrDelete = 'delete'
                        return <SearchedTag tagname={tag.name} addOrDelete={addOrDelete} />
                    }
                    return;
                });
            }
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
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);