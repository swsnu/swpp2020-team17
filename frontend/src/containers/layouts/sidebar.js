import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    AliwangwangOutlined,
    SearchOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

const SideNav = () => {
    const history = useHistory();

    const handlePostClick = () => {
        history.push('/posts');
    }

    const handleLobbyClick = () => {
        history.push('/lobby');
    }

    const handleSearchClick = () => {
        history.push('/search');
    }

    const handleMyPageClick = () => {
        history.push('/myPage');
    }

    // const handleVideosClick = () => {
    //     history.push('/videos');
    // }

    // const handleFileClick = () => {
    //     history.push('/files');
    // }

    return (
        <div>
            <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handlePostClick}>
                    <FormOutlined />
                    <span> Posts </span>
                </Menu.Item>

                <Menu.Item key="2" onClick={handleLobbyClick}>
                    <AliwangwangOutlined />
                    <span> Lobby </span>
                </Menu.Item>

                <Menu.Item key="3" onClick={handleSearchClick}>
                    <SearchOutlined />
                    <span> Search</span>
                </Menu.Item>

                <Menu.Item key="4" onClick={handleMyPageClick}>
                    <UserOutlined />
                    <span> MyPage</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SideNav;
