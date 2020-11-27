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

    onSearch = (value) => {
        if (value !== '') {
            let input = value.toLowerCase();
            this.setState({ searchInput: input });
        } else this.setState({ searchInput: null });
    };

    onClickUserButton = (user_id, addOrDelete) => {
        let user = this.props.storedCurrentUser;
        if (addOrDelete === 'Add') user.friendList.push(user_id);
        else user.friendList = user.friendList.filter(id => {
            return id !== user_id
        });
        this.props.onPutUser(user);
    }

    onClickTagButton = (tag_id, addOrDelete) => {
        let user = this.props.storedCurrentUser;
        if (addOrDelete === 'Add') user.tagList.push(tag_id);
        else user.tagList = user.tagList.filter(id => {
            return id !== tag_id
        });
        this.props.onPutUser(user);
    }

    state = {
        searchInput: null,
    }

    render() {
        let users = []
        let tags = []

        if (this.props.storedCurrentUser) console.log(this.props.storedCurrentUser);
        if (this.state.searchInput !== null) {
            if (this.props.storedCurrentUser && this.props.storedUserList && this.props.storedTagList)  {
                users = this.props.storedUserList.map(user => {
                    if (user.id === this.props.storedCurrentUser.id) return;
                    if (user.username.toLowerCase().includes(this.state.searchInput)) {
                        let addOrDelete = 'Add';
                        if (this.props.storedCurrentUser.friendList.find(id => id===user.id) !== undefined) addOrDelete = 'Delete'
                        return <SearchedUser key={user.id} avatar={user.avatar} username={user.username} addOrDelete={addOrDelete} onButtonClick={() => this.onClickUserButton(user.id, addOrDelete)}/>
                    }
                    return;
                });
                tags = this.props.storedTagList.map(tag => {
                    if (tag.name.toLowerCase().includes(this.state.searchInput)) {
                        let addOrDelete = 'Add';
                        console.log(tag.name);
                        if (this.props.storedCurrentUser.tagList.find(id => id===tag.id) !== undefined) addOrDelete = 'Delete'
                        return <SearchedTag key={tag.id} id={tag.id} tagname={tag.name} addOrDelete={addOrDelete} onButtonClick={() => this.onClickTagButton(tag.id, addOrDelete)}/>
                    }
                    return;
                });
            }
        }

        return (
            <div className="Search">
                <CSRFToken />
                <SearchBar
                    id = "search-bar"
                    onSearch={this.onSearch}
                />
                <div className="searchedTag"> 
                    {tags} 
                </div>
                <div className="searchedUser"> 
                    {users} 
                </div>
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
        onPutUser: (user) => 
            dispatch(actionCreators.putUser(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);