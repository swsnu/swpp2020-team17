import React from 'react'; 
import './SearchedTag.css';
import { Avatar, Button } from 'antd';
import IconLOL from '../../static/icon_lol.png';
import IconHearth from '../../static/icon_hearth.png';
import IconMaple from '../../static/icon_maple.png';
import "antd/dist/antd.css";
import {
    PlusOutlined,
    MinusOutlined,
} from '@ant-design/icons';

const SearchedTag = props => {
    let icon, color;
    if (props.id === 1) {
        icon = IconLOL
        color = '#1A516E'
    } else if (props.id === 2) {
        icon = IconHearth
        color = '#51331D'
    } else if (props.id === 3) {
        icon = IconMaple
        color = '#F5A009'
    } else {
        icon = null
        color = '#A11111'
    }
    return (
        <div className='SearchedTag'>
            <div className="left">
                <Avatar size="large" style={{ backgroundColor: color }} src={icon} />
            </div>
            <div className="middle">
                {props.tagname}
            </div>
            <div className="right">
                <Button onClick={props.onButtonClick}>
                    {props.addOrDelete==='Add'? <PlusOutlined /> : <MinusOutlined />}
                    {props.addOrDelete}
                </Button>
            </div>
        </div>
    ); 
}

export default SearchedTag;