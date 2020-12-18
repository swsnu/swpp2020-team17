// import React from 'react';
// import { connect } from 'react-redux';
// import * as actionCreators from '../../store/actions/index';
// import styled, { keyframes } from 'styled-components';
// import { Divider, List, Button, Space, Menu, Dropdown } from 'antd';

// import MyPage from './MyPage';
// import { getMockStore } from '../../test-utils/mocks'
// import { history } from '../../store/store'

// const stubInitialState = {
//     currentUser: {
//         id: 1,
//         username: 'User1',
//         login: true,
//         avatar: null,
//         chatroom: -1,
//         friendList: [2],
//         postList: [1, 5],
//         shallWeRoomList: [1],
//         watchedPostList: [1, 2, 3],
//         tagList: [1, 2]
//     },
//     storedPostList: [
//         {
//             id: 1,
//             image: "",
//             content: "testContent",
//             tag: 1,
//             likeNum: 0,
//             author: 1,
//             authorAvatar: "",
//             authorName: "testAuthor"
//         }
//     ],
//     storedUserList: [
//         {
//             username: 'User1',
//             login: true,
//             avatar: null,
//             chatroom: -1,
//             friendList: [2],
//             postList: [1, 5],
//             shallWeRoomList: [1],
//             watchedPostList: [1, 2, 3],
//             tagList: [1, 2]
//         }
//     ],
//     storedSelectedChatroom: {
//         id: 1,
//         isGlobal: true,
//         title: 'chatroom1',
//         tag: 1,
//         maxPersonnel: 10,
//         discordLink: null
//     }
// }

// jest.mock('../../components/Profile/Profile', () => {
//     return jest.fn(props => {
//         return (
//             <div className="spyProfile">
//                 <div className="click-profile" onClick={props.onButtonClick} /> 
//             </div>
//         )
//     });
// });

// jest.mock('../../components/Author/Author', () => {
//     return jest.fn(props => {
//         return (
//             <div className="spyAuthor">
//                 <div className="click-author" onClick={props.onButtonClick} /> 
//             </div>
//         )
//     });
// }
// jest.mock('../../components/PostInGrid/PostInGrid', () => {
//     return jest.fn(props => {
//         return (
//             <div className="spyAuthor">
//                 <div className="click-PostInGrid" onClick={props.onButtonClick} /> 
//             </div>
//         )
//     });
// });

// jest.mock('../../components/GameTag/GameTag', () => {
//     return jest.fn(props => {
//         return (
//             <div className="spyAuthor">
//                 <div className="click-author" onClick={props.onButtonClick} /> 
//             </div>
//         )
//     });
// });

// jest.mock('../../csrftoken', () => {
//     return jest.fn(props => {
//         return (
//             <div className="spyAuthor">
//                 <div className="click-author" onClick={props.onButtonClick} /> 
//             </div>
//         )
//     });
// });