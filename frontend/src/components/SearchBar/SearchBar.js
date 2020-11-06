import React from 'react'; 
import { Input } from 'antd';
import "antd/dist/antd.css";

const { Search } = Input;
const onSearch = value => console.log(value);


const SearchedBar = props => {
    return (
        <div>
            <div className="SearchBar">
                <Search
                    placeholder="Search tag or user"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div> 
        </div>
    ); 
}
export default SearchedBar;