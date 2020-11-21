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
const GameTag = (props) => {
    // Set certain game tag's icon, name, color
    let icon, name, color;
    const iconWidth = 20;

    if (props.id === 1) {
        icon = IconLOL
        name = 'LOL'
        color = '#1A516E'
    } else if (props.id === 2) {
        icon = IconHearth
        name = 'HearthStone'
        color = '#51331D'
    } else if (props.id === 3) {
        icon = IconMaple
        name = 'MapleStory'
        color = '#F5A009'
    } else {
        icon = 
        name = 'Debug:Noname'
        color = '#A11111'
    }

    return (
        <Tag
            icon={
                <img
                    src={icon}
                    width={iconWidth}
                    style={{ marginRight: 5 }}
                />
            }
            color={color}
        >
            <TagtextWrapper>
                {name}
            </TagtextWrapper>
        </Tag>
    );
}

export default GameTag;