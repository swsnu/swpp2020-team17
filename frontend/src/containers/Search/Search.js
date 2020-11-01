import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SearchedTag from '../../components/SearchedTag/SearchedTag';
import SearchedUser from '../../components/SearchedUser/SearchedUser';
import SearchBar from '../../components/SearchBar/SearchBar';

class Search extends Component {

    render() {
        return (
            <div>
                <MenuBar></MenuBar>
                <SearchBar></SearchBar>
                <SearchedTag></SearchedTag>
                <SearchedUser></SearchedUser>
            </div>
        );
    }
}

export default Search;