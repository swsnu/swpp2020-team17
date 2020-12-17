import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Lobby from "../containers/Lobby/Lobby";
import RoomInfo from "../containers/RoomInfo/RoomInfo";
import Posts from "../containers/Post/Post";
import SideNav from "../components/SideBar/SideBar";

// import File from "../containers/pages/files";
// import Videos from "../containers/pages/videos";

import Login from "../containers/Login/Login";
import CreatePost from "../containers/CreatePost/CreatePost";
import Search from "../containers/Search/Search";
import MyPage from "../containers/MyPage/MyPage";
import UserPage from "../containers/UserPage/UserPage";
import Chatroom from "../containers/Chatroom/Chatroom";
import PostInUserPage from '../components/PostInUserPage/PostInUserPage';
import LoginPage from "../containers/LoginPage/LoginPage";

import { ConnectedRouter } from 'connected-react-router';

import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
}   from '@ant-design/icons';

const { Header, Sider, Content} = Layout;


const ApplicationRoutes = props => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

    const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    const returnSideNav = (width) => {
      if (width < 320) {
        return (
          <Header>
            <SideNav handleLogout={props.handleLogout} mode="horizontal"/>
          </Header>
        )
      } else {
        return (
          <Sider trigger={null} collapsible collapsed={collapse} width="150">
            <SideNav handleLogout={props.handleLogout} mode="inline"/>
          </Sider>
        )
      }
    }
  
    const returnInnerHeader = (width) => {
      if (width < 320) {
        return null;
      } else {
        return (
          <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
            {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: handleToggle,
                style: {color: "#fff"}
            })}
          </Header>
        )
      }
    };

  return (
    <div className="ApplicationRoutes">
      <ConnectedRouter history={props.history} >
        <Switch>
            <Layout>
              {returnSideNav(window.innerWidth)}
              <Layout>
                {returnInnerHeader(window.innerWidth)}
                  <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                    {/* <Switch> */}
                        {/* <Route path='/login' component={Login} /> */}
                        <Route exact path="/post" component={Posts} />
                        <Route path="/lobby" component={Lobby} />
                        <Route path="/RoomInfo" component={RoomInfo} />
                        <Route path="/search" component={Search} />
                        <Route path="/myPage" component={MyPage} />
                        <Route path="/createpost" component={CreatePost} />
                        <Route path='/page/:id' component={UserPage} />
                        <Route path='/chatroom/:id' component={Chatroom} />
                        <Route exact path='/post/:id' component={PostInUserPage} />
                        <Redirect exact from='/' to='/post' />
                        {/* <Route path="/files" component={File} />
                        <Route path="/videos" component={Videos} /> */
                        /* <redirect to="/post" from="/" /> */}
                    {/* </Switch> */}
                  </Content>
                  {/* <Route path="/login" component={LoginPage} /> */}
              </Layout>
            </Layout>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default ApplicationRoutes;
