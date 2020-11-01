import React from 'react'; 
import './SearchBar.css';

const SearchedBar = props => {
    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search Tags or Users"/>
            <button>Search</button>
        </div> 
    ); 
}
export default SearchedBar;