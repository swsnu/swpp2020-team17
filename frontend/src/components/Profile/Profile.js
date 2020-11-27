import React, { Component } from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Author from '../Author/Author'
import GameTag from '../GameTag/GameTag'
import styled from 'styled-components';


const AuthorWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const GameTagWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

/* TODO: 
1. Author 받아오기
    1.1. 하단의 AuthorWrapper 안에 받아온거 넣어주기
2. Author's GameTag list 받아오기
    2.1 하단의 GameTagWrapper 내부에 map으로 넣어주기

/* FIXME: 액션 필요하면 추가
// 간단한 버전
            <Card
            >

// 액션 추가된 버전
            <Card
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />
                ]}
                style={{
                    width: "100%"
                }}
*/


class Profile extends Component {
    render() {
        return (
            <Card
            >
                <Card.Meta
                    title={
                        <AuthorWrapper>
                            <Author showOnline="true" />
                        </AuthorWrapper>
                    }
                    description={
                        <GameTagWrapper>
                            <GameTag
                                id={1}
                            />
                            <GameTag
                                id={2}
                            />
                            <GameTag
                                id={3}
                            />
                        </GameTagWrapper>
                    }
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                ></Card.Meta>
            </Card>
        );
    }
}

export default Profile;
