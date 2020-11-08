import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

const SideNav = () => {
    const history = useHistory();

    const handlePostClick = () => {
        history.push('/posts');
    }

    const handleUserClick = () => {
        history.push('/list');
    }

    const handleVideosClick = () => {
        history.push('/videos');
    }

    const handleFileClick = () => {
        history.push('/files');
    }

    return (
        <div>
            <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px" }}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handlePostClick}>
                    <FormOutlined />
                    <span> Posts</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleUserClick}>
                    <UserOutlined />
                    <span> Lobby</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleVideosClick}>
                    <VideoCameraOutlined />
                    <span> Videos</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleFileClick}>
                    <UploadOutlined />
                    <span> Files</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SideNav;
