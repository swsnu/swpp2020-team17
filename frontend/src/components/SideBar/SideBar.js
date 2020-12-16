import React, {Component} from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    AliwangwangOutlined,
    SearchOutlined,
    FormOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import {withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';

class SideNav extends Component {

    handlePostClick = () => {
        this.props.history.push('/post');
    }

    handleLobbyClick = () => {
        this.props.history.push('/lobby');
    }

    handleSearchClick = () => {
        this.props.history.push('/search');
    }

    handleMyPageClick = () => {
        this.props.history.push('/myPage');
    }

    handleLogout = () => {
        this.props.onLogout();
        this.props.history.push('/login')
    }

    render() {
        if(this.props.storedCurrentUser) {
            if(!this.props.storedCurrentUser.login)
                return <Redirect to='/login'/>
        }
        return (
            <div className="SideBar">
                <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item id="post-menu" key="1" onClick={this.handlePostClick}>
                        <FormOutlined />
                        <span> Posts </span>
                    </Menu.Item>

                    <Menu.Item id="lobby-menu" key="2" onClick={this.handleLobbyClick}>
                        <AliwangwangOutlined />
                        <span> Lobby </span>
                    </Menu.Item>

                    <Menu.Item id="search-menu" key="3" onClick={this.handleSearchClick}>
                        <SearchOutlined />
                        <span> Search </span>
                    </Menu.Item>

                    <Menu.Item id="my-page-menu" key="4" onClick={this.handleMyPageClick}>
                        <UserOutlined />
                        <span> MyPage </span>
                    </Menu.Item>
                    <Menu.Item id="logout-menu" key="5" onClick={this.props.handleLogout}>
                    {/* <Menu.Item id="logout-menu" key="5" onClick={this.handleLogout}> */}
                        <LogoutOutlined />
                        <span> Logout </span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storedCurrentUser: state.ur.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCurrentUser: () =>
            dispatch(actionCreators.getCurrentUser()),
        onLogout: () =>
            dispatch(actionCreators.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNav));
