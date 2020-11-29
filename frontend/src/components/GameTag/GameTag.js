import React from 'react'; 
import { Tag } from 'antd';
import { BackwardOutlined } from '@ant-design/icons';
import IconLOL from '../../static/icon_lol.png';
import IconHearth from '../../static/icon_hearth.png';
import IconMaple from '../../static/icon_maple.png';
import styled from 'styled-components';

const TagtextWrapper = styled.text`
    font-size: 12px;
    font-weight: bold;
    text-shadow:
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
`;

/*  TODO: 
    1. Add closable feature to the tags in MyPage
    2. Add new tag feature w. searching
*/

// Take game's name by props
// @param : { key, tagId, isChecked, onClick}
const GameTag = (props) => {
    // Set certain game tag's icon, name, color_checked
    let icon, name, color_checked, color_unchecked;
    const iconWidth = 20;

    if (props.tagId === 1) {
        icon = IconLOL
        name = 'LOL'
        color_checked = '#1A516E'
        color_unchecked = 'geekblue'
    } else if (props.tagId === 2) {
        icon = IconHearth
        name = 'HearthStone'
        color_checked = '#51331D'
        color_unchecked = 'geekblue'
    } else if (props.tagId === 3) {
        icon = IconMaple
        name = 'MapleStory'
        color_checked = '#F5A009'
        color_unchecked = 'geekblue'
    } else {
        icon = null
        name = 'Debug:Noname'
        color_checked = '#A11111'
        color_unchecked = 'geekblue'
    }
    return (
        <div className="GameTag">
            <Tag
                icon={
                    <img
                        src={icon}
                        style={{ width: 20, marginRight: 5 }}
                    />
                }
                color={props.isChecked ? color_checked : color_unchecked}
                onClick={props.onClick}
            >
                <TagtextWrapper>
                    {name}
                </TagtextWrapper>
            </Tag>
        </div>
        
    );
}

export default GameTag;