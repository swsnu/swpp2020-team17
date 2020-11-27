import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
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

const fetchGameTagList = (tagList) => {
    let tagComponents = tagList.map(tag_id => {
        return (
            <GameTag
                id={tag_id}
                isChecked={true}
            />
        );
    })

    return tagComponents;
}

// @param: user
class Profile extends Component {
    // FIXME: 지금은 임시로 Profile에서 Author에 관한 모든 prop을 가공해서 넘김
    // state = {
    //     tagList: [],
    //     avatar: '',
    //     name: '',
    //     showOnline: true,
    //     // showOnline: '', // user model에 추가 필요, 지금은 임시로 "login" key 이용
    // }

    // FIXME: User model 수정되면 currentUser 말고 user를 prop으로 받도록 수정 요함.
    // componentDidMount() {
    //     // if (this.props.storedCurrentUser === null) {
    //     //     this.setState({
    //     //         tagList: this.props.storeCurrentUser.tagList,
    //     //         avatar: this.props.storeCurrentUser.avatar,
    //     //         name: this.props.storeCurrentUser.username,
    //     //         // showOnline: this.props.storeCurrentUser.login,
    //     //     })
    //     // }
    //     this.props.onGetCurrentUser();
    // }

    //FIXME: 온라인 관련 prop 추가 예정
    // onToggleOnlineSwitch(checked) {
    //     this.setState({
    //         showOnline: checked
    //     })
    // }

    render() {
        // // let user = this.props.storedCurrentUser;
        // //FIXME: 온라인 관련 prop 추가 예정
        // let name = this.props.storedCurrentUser.username;
        // let avatar = this.props.storedCurrentUser.avatar;
        // let tagList = this.props.storedCurrentUser.tagList;

        return (
            <Card
                //FIXME: 추가예정
                // extra={
                //     <Switch
                //         checkedChildren={<CheckOutlined />}
                //         unCheckedChildren={<CloseOutlined />}
                //         {...(this.state.showOnline)?{defaultChecked}:{}}
                //         onChange={this.onToggleOnlineSwitch}
                //     />
                // }
            >
                <Card.Meta
                    title={
                        <AuthorWrapper>
                            <Author
                                name={this.props.name}
                                avatar={this.props.avatar}
                                //FIXME: model추가 필요
                                showOnline={true}
                            />
                        </AuthorWrapper>
                    }
                    description={
                        <GameTagWrapper>
                            {fetchGameTagList(this.props.tagList)}
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
// const mapStateToProps = (state) => {
//     return {
//         storedCurrentUser: state.ur.currentUser,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onGetCurrentUser: () => 
//             dispatch(actionCreators.getCurrentUser()),
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Profile);