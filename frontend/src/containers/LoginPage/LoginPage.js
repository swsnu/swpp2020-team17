import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';
// import { Redirect } from 'react-router';
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CSRFToken from '../../csrftoken'

const Positioner = styled.div`
    margin-top: 10%;
`;

class LoginPage extends Component {
    onClickLogin = () => {
        window.location = ('https://discord.com/api/oauth2/authorize?client_id=782980326459965490&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify')
        this.props.onLogin();
    }

    render(){
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

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));
// export default LoginPage;

// // import * as actionCreators from '../../store/actions/index';
// // import { connect } from 'react-redux';
// // import { withRouter } from 'react-router';
// // import CSRFToken from '../../csrftoken'
// import React from 'react';
// import styled from 'styled-components';
// // import oc from 'open-color';
// // import { shadow } from './styleUtils';
// // import { Link } from 'react-router-dom';

// // import { Redirect } from 'react-router-dom';
// import './styles.css';

// // 배경 로고
// // const BackLogo = styled.div`
// //     position: absolute;
// //     top: 50%;
// //     left: 50%;
// //     transform: translate(-50%, -50%);
// // `;

// // 화면의 중앙에 위치
// const Positioner = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-image: './logo.png';
// `;

// // 너비, 그림자 설정
// // const ShadowedBox = styled.div`
// //     width: 300px;
// //     ${shadow(2)}
// // `;

// // 로고
// // const LogoWrapper = styled.div`
// //     background: ${oc.teal[7]};
// //     height: 5rem;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// // `;

// // const Logo = styled(Link)`
// //     color: white;
// //     font-family: 'Rajdhani';
// //     font-size: 2.4rem;
// //     letter-spacing: 5px;
// //     text-decoration: none;
// // `;

// // // children 이 들어가는 곳
// // const Contents = styled.div`
// //     background: white;
// //     padding: 2rem;
// //     height: auto;
// // `;


// // const LoginPage = ({children}) => {
// const LoginPage = () => {
//     return (
//         <Positioner>
//         <div className="block">
//             <div className="block__header">
//                 Shallwegame?
//                         </div>
//             <div className="block__body">
//                 {/* <CSRFToken /> */}
//                 <a
//                     href="https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify"
//                     className="login_button"
//                 >
//                     Login with Discord
//                         </a>
//             </div>
//             <div className="block__footer">
//                 This website is not affiliated with <a href="https://discordapp.com">discord inc.</a>
//             </div>
//             <div className="block__footer">
//                 I do not save anything. <a href="https://discordapp.com">See sources</a>
//             </div>
//         </div>
//         </Positioner>
//     );
//     // return (
//     // );
// }

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         onLogin: () =>
// //             dispatch(actionCreators.login()),
// //     }
// // }

// // export default connect(null, mapDispatchToProps)(withRouter(LoginPage));
// export default LoginPage;
