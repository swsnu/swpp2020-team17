import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    AliwangwangOutlined,
    SearchOutlined,
    FormOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

const SideNav = props => {
    const history = useHistory();

    const handlePostClick = () => {
        history.push('/post');
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
        <div className="SideBar">
            <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item id="post-menu" key="1" onClick={handlePostClick}>
                    <FormOutlined />
                    <span> Posts </span>
                </Menu.Item>

                <Menu.Item id="lobby-menu" key="2" onClick={handleLobbyClick}>
                    <AliwangwangOutlined />
                    <span> Lobby </span>
                </Menu.Item>

                <Menu.Item id="search-menu" key="3" onClick={handleSearchClick}>
                    <SearchOutlined />
                    <span> Search </span>
                </Menu.Item>

                <Menu.Item id="my-page-menu" key="4" onClick={handleMyPageClick}>
                    <UserOutlined />
                    <span> MyPage </span>
                </Menu.Item>
                <Menu.Item id="logout-menu" key="5" onClick={props.handleLogout}>
                    <LogoutOutlined />
                    <span> Logout </span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SideNav;