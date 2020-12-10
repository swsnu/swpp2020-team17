import React, { Component } from 'react';
import { Avatar, Tag, Badge, Row, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Nickname = styled.text`
    font-size: 12px;
    font-weight: bold;
`;

// padding 관련 설정들
// FIXME: 얘네, padding이나 margin 관련 설정은 parent에서 하는게 통일성 있으려나..
const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
`;

// props : {name, avatar, showOnline}
class Author extends Component {
    //FIXME: user를 prop으로 전달하게 수정하면 state 필요해짐.
    // constructor(props) {
    //     super(props);
    //     this.state = {
            // avatar: null,
            // showOnline: props.showOnline,
            // isOnline: true, // 함수로 개선 필요
            // hasProfileImage: true, // 함수로 개선 필요
    //         user: null,
    //     };
    // }

    //FIXME: user를 prop으로 전달하게 수정하면 componentDidMount 필요해짐.
    /* TODO: 유저 정보 관련 */
    // online 가져오는 함수 필요
    // profile image 가져오는 함수 필요
    // nickname 가져오는 함수 필요
    // componentDidMount() {
    //     this.setState({
    //         user: 
    //     })
    // }

    loadProfileImage() {
        // if (this.state.hasProfileImage) {
        if (this.props.avatar !== null) {
            return (
                <Avatar
                    src={this.props.avatar} // 함수로 바꿔줘야함
                    size="default"
                />
            );
        } else {
            return (
                <Avatar
                    icon = {< UserOutlined />}
                    size="default"
                />
            );
        }
    }

    setAvatar() {
        if (this.props.showOnline === true) {
            return (
                <Badge status={this.props.showOnline ? "success" : "default"}>
                    {this.loadProfileImage()}
                </Badge>
            );
        } else {
            return (
                <div>
                    {this.loadProfileImage()}
                </div>
            );
        }
    }
                                    
    /* Render <Author /> */
    render() {
        // 프로필 있는 유저
        //FIXME: line75: "login" 아니고 "online" 추가되어야 함, model에서
        // if (this.props.showOnline === true) {
        return (
            <div className="Author">
                <AuthorWrapper >
                    <Row align="middle">
                        <Col flex="none" style={{ marginRight: 10 }}>
                            {this.setAvatar()}
                        </Col>
                        <Col flex="none" style={{ marginRight: 20 }}>
                            <Nickname>
                                {this.props.name}
                            </Nickname>
                        </Col>
                    </Row>
                </AuthorWrapper>
            </div>
        );
    }
}

export default Author;

        // showOnline===false; 온라인 여부를 노출하길 원하지 않는경우
        // } else {
        //     return (
        //         <AuthorWrapper>
        //             <div>
        //                 <Row align="middle">
        //                     <Col flex="none" style={{ marginRight: 10 }}>
        //                         {this.loadProfileImage()}
        //                     </Col>
        //                     <Col flex="none" style={{ marginRight: 20 }}>
        //                         <Nickname>
        //                             moovinzoo2
        //                         </Nickname>
        //                     </Col>
        //                 </Row>
        //             </div>
        //         </AuthorWrapper>
        //     );
        // }

/* TODO: profile 이미지 없을 때 아래 코드로 대체 */
// class Author extends Component {
//     render() {
//         return (
//             <div classname="test-author">
//                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//                 <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
//                 <Avatar icon={<UserOutlined />} />
//             </div>
//         );
//     }
// }

/* 버튼 관련된 내용 일단 빼놓았음 */
/*
                            <Col flex="none">
                                <GameTag name='lol' />
                                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                                    Youtube
                                </Tag>
                                <Tag icon={<FacebookOutlined />} color="#3b5999">
                                    Facebook
                                </Tag>
                                <Tag icon={<LinkedinOutlined />} color="#55acee">
                                    LinkedIn
                                </Tag>
                            </Col>
                            */