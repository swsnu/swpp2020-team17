import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import Chatroom from './Chatroom';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatActionCreators from '../../store/actions/chatroom';

jest.mock('antd', () => {
    return jest.fn(props => {
        return (
            <div className="spyantd" onClick={jest.fn()}/>
        )
    });
});

jest.mock('react-router', () => ({
    ...jest.requireActual('styled-components'),
    styled: () => ({
        text: jest.fn(),
    }),
}));

jest.mock('styled-components', () => {
    return jest.fn(props => {
        return (
            <div className="spyStyle" onClick={jest.fn()}/>
        )
    });
});

const propsList = [
    {
        id: 1, 
        title: 'chatroom1', 
        tag: 1, 
        memberList: [1, 2],
    },
]

const stubInitialState = {
    chatroomList: [
        {
            id: 1, 
            title: 'chatroom1', 
            tag: 1, 
            memberList: [1, 2],
        },
        {
            id: 1, 
            title: 'chatroom2', 
            tag: 2, 
            memberList: [3],
        },
    ],
    currentUser: {
        id: 1, 
        username: 'User1',
        login: true,
        avatar: null, 
        chatroom: -1, 
        friendList: [2],
        postList: [1, 5],
        shallWeRoomList: [1, 2], 
        watchedPostList: [1, 2, 3], 
        tagList: [1]
    },
}

const mockStore = getMockStore(stubInitialState);

describe('<Chatroom />', () => {
    let chatroom, spyGetUserList, spyGetCurrentUser, spyPutUser, spyGetChatroomList, spyDeleteChatroom, spyDeleteChatting;
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
       chatroom = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={Chatroom} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetUserList = jest.spyOn(userActionCreators, 'getUserList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetChatroomList = jest.spyOn(chatActionCreators, 'getChatroomList')
            .mockImplementation(() => { return dispatch => {}; }); 
        spyDeleteChatroom = jest.spyOn(chatActionCreators, 'deleteChatroom')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeleteChatting = jest.spyOn(chatActionCreators, 'deleteChatting')
            .mockImplementation(() => { return dispatch => {}; });
    })

    // it('should render without errors', () => {
    //     const component = mount(chatroom);
    //     let wrapper = component.find(".Chatroom");
    //     expect(wrapper.length).toBe(1);
    // });
});
