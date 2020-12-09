import React from 'react'; 
import './SearchedUser.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useHistory } from 'react-router';
import {
    UserAddOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';

const SearchedUser = props => {
    const history = useHistory();

    if (props.avatar === null) {
        return (
            <div className='SearchedUser'>
                <div className="left" >
                    <Avatar onClick={() => history.push("/page/" + props.id)} size="large" icon={<UserOutlined /> } />
                </div>
                <div className="middle">
                    {props.username}
                </div>
                <div className="right">
                    <Button onClick={props.onButtonClick}>
                        {props.addOrDelete==='Add'? <UserAddOutlined /> : <UserDeleteOutlined />}
                        {props.addOrDelete}
                    </Button>
                </div>
            </div>
        ); 
    } else {
        return (
            <div className='SearchedUser'>
                <div className="left">
                    <Avatar onClick={() => history.push("/page/" + props.id)} size="large" style={{ backgroundColor: '#1A516E' }} src={props.avatar} />
                </div>
                <div className="middle">
                    {props.username}
                </div>
                <div className="right">
                    <Button onClick={props.onButtonClick}>
                        {props.addOrDelete==='Add'? <UserAddOutlined /> : <UserDeleteOutlined />}
                        {props.addOrDelete}
                    </Button>
                </div>
            </div>
        ); 
    }
    
}
export default SearchedUser;