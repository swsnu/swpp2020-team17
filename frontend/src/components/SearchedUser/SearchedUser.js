import React from 'react'; 
import './SearchedUser.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const SearchedUser = props => {
    if (props.avatar === null) {
        return (
            <div className='SearchedUser'>
                <div className="left">
                    <Avatar size="large" icon={<UserOutlined />} />
                </div>
                <div className="middle">
                    {props.username}
                </div>
                <div className="right">
                    <Button onClick={props.onButtonClick}>
                        {props.addOrDelete}
                    </Button>
                </div>
            </div>
        ); 
    } else {
        return (
            <div className='SearchedUser'>
                <div className="left">
                    <Avatar size="large" style={{ backgroundColor: '#1A516E' }} src={props.avatar} />
                </div>
                <div className="middle">
                    {props.username}
                </div>
                <div className="right">
                    <Button onClick={props.onClick}>
                        {props.addOrDelete}
                    </Button>
                </div>
            </div>
        ); 
    }
    
}
export default SearchedUser;