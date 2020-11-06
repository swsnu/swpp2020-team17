import React from 'react'; 
import './SearchedUser.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const SearchedUser = props => {
    return (
        <div className='SearchedUser'>
            <div className="left">
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div className="middle">
                User Name
            </div>
            <div className="right">
                <button>
                    Add/Delete
                </button>
            </div>
        </div>
    ); 
}
export default SearchedUser;