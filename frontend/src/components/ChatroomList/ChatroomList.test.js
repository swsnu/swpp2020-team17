import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import ChatroomList from './ChatroomList';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatActionCreators from '../../store/actions/chatroom';

const propsList = [
    {
        discordLink: "not yet",
        id: 1,
        isGlobal: true,
        maxPersonnel: 10,
        title: 'chatroom1',
        tag: 1,
        memberList: [1],
    },
    {
        discordLink: "not yet",
        id: 2,
        isGlobal: true,
        maxPersonnel: 10,
        title: 'chatroom2',
        tag: 2,
        memberList: [2],
    },
]

const stubInitialState = {
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

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

const mockStore = getMockStore(stubInitialState);

describe('<ChatroomList />', () => {
    let chatroomList, spyGetCurrentUser, spyPutUser, spyGetChatroomList, spyDeleteChatroom, spyCreateChatting, spyDeleteChatting;
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        chatroomList = (
            <Provider store={mockStore}>
                <ConnectedRouter history={history}>
                <Route path='/' exact component={() => 
                        <ChatroomList
                            isShallWe={true}
                            list={propsList}
                        />} />
                        
                </ConnectedRouter>
            </Provider>
        );

        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => { }; }); 
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => { }; });
        spyDeleteChatroom = jest.spyOn(chatActionCreators, 'deleteChatroom')
            .mockImplementation(() => { return dispatch => { }; });
        spyCreateChatting = jest.spyOn(chatActionCreators, 'createChatting')
            .mockImplementation(() => { return dispatch => { }; });
        spyDeleteChatting = jest.spyOn(chatActionCreators, 'deleteChatting')
            .mockImplementation(() => { return dispatch => { }; });
    })

    it('should render without errors', () => {
        const component = mount(chatroomList);
        let wrapper = component.find(".ChatroomList");
        expect(wrapper.length).toBe(1);
    });
    

    it('should render without errors when isShallWe=false', () => {
        chatroomList = (
            <Provider store={mockStore}>
                <ConnectedRouter history={history}>
                <Route path='/' exact component={() => 
                        <ChatroomList
                            isShallWe={false}
                            list={propsList}
                        />} />
                        
                </ConnectedRouter>
            </Provider>
        );
        const component = mount(chatroomList);
        const wrapper = component.find('.ChatroomList');
        expect(wrapper.length).toBe(1);
    });

    it('should click sorry', () => {
        const component = mount(chatroomList);
        const wrapper = component.find(".sorry-button");
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
        expect(spyDeleteChatroom).toBeCalledTimes(1);
    });
    
    it('should click join when isShallWe=false', () => {
        chatroomList = (
            <Provider store={mockStore}>
                <ConnectedRouter history={history}>
                <Route path='/' exact component={() => 
                        <ChatroomList
                            isShallWe={false}
                            list={propsList}
                        />} />
                        
                </ConnectedRouter>
            </Provider>
        );
        const component = mount(chatroomList);
        const wrapper = component.find(".join-button");
        expect(wrapper.at(0).length).toBe(1);
    });

    it('should click sure', () => {
        const component = mount(chatroomList);
        const wrapper = component.find(".sure-button");
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
        expect(spyPutUser).toBeCalledTimes(1);

    });
});
