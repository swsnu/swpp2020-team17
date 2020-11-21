import React from 'react'; 
import './SearchedTag.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const SearchedTag = props => {
    return (
        <div className='SearchedTag'>
            <div className="left">
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div className="middle">
                {props.tagname}
            </div>
            <div className="right">
                <Button onClick={props.onClick}>
                    {props.addOrDelete}
                </Button>
            </div>
        </div>
    ); 
}

export default SearchedTag;