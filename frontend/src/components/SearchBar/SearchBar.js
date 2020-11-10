import React from 'react'; 
import { Input } from 'antd';
import "antd/dist/antd.css";

const { Search } = Input;


const SearchedBar = props => {
    return (
        <div>
            <div className="SearchBar">
                <Search
                    placeholder="Search tag or user"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={props.onSearch}
                />
            </div> 
        </div>
    ); 
}
export default SearchedBar;