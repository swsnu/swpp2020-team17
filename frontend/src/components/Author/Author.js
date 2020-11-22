import React, { Component } from 'react';
import { Avatar, Tag, Badge, Row, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Nickname = styled.text`
    font-size: 13px;
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

// props : {showOnline}
class Author_test_copy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOnline: props.showOnline,
            isOnline: true, // 함수로 개선 필요
            hasProfileImage: true, // 함수로 개선 필요
        };
    }

    /* TODO: 유저 정보 관련 */
    // online 가져오는 함수 필요
    // profile image 가져오는 함수 필요
    // nickname 가져오는 함수 필요

    loadProfileImage() {
        if (this.state.hasProfileImage) {
            return (
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" // 함수로 바꿔줘야함
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
                                    
    /* Render <Author /> */
    render() {
        // 프로필 있는 유저
        if (this.state.showOnline === "true") {
            // TODO: 함수로 대체해야 함.

            return (
                <AuthorWrapper>
                        <Row align="middle">
                            <Col flex="none" style={{ marginRight: 10 }}>
                                <Badge status={this.state.isOnline ? "success" : "default"}>
                                    {this.loadProfileImage()}
                                </Badge>
                            </Col>
                            <Col flex="none" style={{ marginRight: 20 }}>
                                <Nickname>
                                    moovinzoo2
                                </Nickname>
                            </Col>
                        </Row>
                </AuthorWrapper>
            );

        // showOnline===false; 온라인 여부를 노출하길 원하지 않는경우
        } else {
            return (
                <AuthorWrapper>
                    <div>
                        <Row align="middle">
                            <Col flex="none" style={{ marginRight: 10 }}>
                                {this.loadProfileImage()}
                            </Col>
                            <Col flex="none" style={{ marginRight: 20 }}>
                                <Nickname>
                                    moovinzoo2
                                </Nickname>
                            </Col>
                        </Row>
                    </div>
                </AuthorWrapper>
            );
        }
    }
}

export default Author_test_copy;

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