import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux';
import CSRFToken from '../../csrftoken';

const Positioner = styled.div`
    margin-top: 10%;
`;

class LoginPage extends Component {
    onClickLogin = () => {
        window.location = ('https://discord.com/api/oauth2/authorize?client_id=773940751608053771&redirect_uri=https%3A%2F%2Fshallwega.me%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify')
        this.props.onLogin();
    }

    render(){
        console.log("HERE!!!!")
        return(
            <div className="LoginPage">
                <Positioner>
                <CSRFToken />
                <Result
                    icon={<SmileOutlined />}
                    title="shallWeGame"
                    extra={
                        <Button
                            id="login-button"
                            type="primary"
                            onClick={this.onClickLogin}
                        >
                            Login with Discord
                </Button>}
                />
            </Positioner>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () =>
            dispatch(actionCreators.login()),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);
