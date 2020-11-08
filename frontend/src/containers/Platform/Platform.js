import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// import MenuBar from "../../components/MenuBar/MenuBar"
// import Posts from "../../containers/Post/Post"
// import Lobby from "../../containers/Lobby/Lobby"
// import Search from "../../containers/Search/Search"
// import MyPage from "../../containers/MyPage/MyPage"

const { Header, Content, Footer } = Layout;

class Platform extends React.Component {
    state = {
        selected: 'post', // Default 'post'
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 1,
    //     }
    // }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ selected: e.key })
    }

    render() {
        return (
            <Layout>
                <Header>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.selected.toString()]} mode="horizontal">
                        {/* <Menu theme="dark" mode="horizontal"                              defaultSelectedKeys={[this.state.selected.toString()]}></Menu>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}>       Read Posts</Menu.Item> */}
                        <Menu.Item key="post" icon={<MailOutlined />} onClick={() => this.handleClick('post')}>
                            Posts
                        </Menu.Item>
                        <Menu.Item key="lobby" icon={<AppstoreOutlined />} onClick={() => this.handleClick('lobby')}>
                            Lobby
                        </Menu.Item>
                        <Menu.Item key="search" icon={<AppstoreOutlined />} onClick={() => this.handleClick('search')}>
                            Search
                        </Menu.Item>
                        <Menu.Item key="mypage" icon={<AppstoreOutlined />} onClick={() => this.handleClick('mypage')}>
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                MyPage
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content>

                    {/* {this.state.selected == 1 ? <Posts /> :
                        this.state.selected == 2 ? <Lobby /> :
                            this.state.selected == 3 ? <Search /> :
                                <MyPage />} */}
                    {this.state.selected.toString() === 1 ? "Post" :
                        this.state.selected.toString() === 2 ? "Lobby" :
                            this.state.selected.toString() === 3 ? "Search" :
                                "MyPage"}

                </Content>
                <Footer>"Footer"</Footer>
            </Layout>
        );
    }
}

export default Platform;
// import React from 'react';
// import { Menu } from 'antd';
// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//   } from '@ant-design/icons';
// import {useHistory}  from 'react-router';
// const SideNav = () => {
//     const history = useHistory();
// const handleUserClick = () => {
//         history.push('/list');
//     }
// const handleVideosClick = () => {
//         history.push('/videos');
//     }
// const handleFileClick = () => {
//         history.push('/files');
//     }
// return (
//     <div>
//         <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px" }}></div>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1" onClick={handleUserClick}>
//                 <UserOutlined />
//                 <span> Users</span>
//             </Menu.Item>
//             <Menu.Item key="2" onClick={handleVideosClick}>
//                 <VideoCameraOutlined />
//                 <span> Videos</span>
//             </Menu.Item>
//             <Menu.Item key="3" onClick={handleFileClick}>
//                 <UploadOutlined />
//                 <span> Files</span>
//             </Menu.Item>
//         </Menu>
//     </div>
// );
// }
// export default SideNav;