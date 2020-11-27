import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Lobby from "../containers/Lobby/Lobby";
import RoomInfo from "../containers/RoomInfo/RoomInfo";
import Posts from "../containers/Post/Post";
import SideNav from "../containers/layouts/sidebar";

// import File from "../containers/pages/files";
// import Videos from "../containers/pages/videos";

import Login from "../containers/Login/Login"
import CreatePost from "../containers/CreatePost/CreatePost"
import Search from "../containers/Search/Search"
import MyPage from "../containers/MyPage/MyPage"

import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
}   from '@ant-design/icons';

const { Header, Sider, Content} = Layout;


const ApplicationRoutes = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

    const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }
  return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapse}>
            <SideNav />
          </Sider>
          <Layout>
            <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
                      {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                          className: 'trigger',
                          onClick: handleToggle,
                          style: {color: "#fff"}
                      })}
            </Header>
              <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                <Switch>
                    <Route path='/login' component={Login} />

                    <Route path="/post" component={Posts} />
                    <Route path="/lobby" component={Lobby} />
                    <Route path="/RoomInfo" component={RoomInfo} />
                    <Route path="/search" component={Search} />
                    <Route path="/myPage" component={MyPage} />
                    <Route path="/createpost" component={CreatePost} />

                    {/* <Route path="/files" component={File} />
                    <Route path="/videos" component={Videos} /> */}

                    <Redirect to="/login" from="/" />
                </Switch>
              </Content>
          </Layout>
        </Layout>
    </Router>
  );
}

export default ApplicationRoutes;