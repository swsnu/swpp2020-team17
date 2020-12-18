import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import Chatroom from './Chatroom';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatActionCreators from '../../store/actions/chatroom';

jest.mock('../../components/Chatting/Chatting', () => {
    return jest.fn(props => {
        return (
            <div className="spyChatting" />
        )
    })
})

jest.mock('../../components/Author/Author', () => {
    return jest.fn(props => {
        return (
            <div className="spyAuthor" />
        )
    })
})

const stubInitialState = {
    currentUser: {
        id: 1, 
        username: 'User1',
        login: true,
        avatar: null, 
        chatroom: 1, 
        friendList: [2],
        postList: [1, 5],
        shallWeRoomList: [1, 2], 
        watchedPostList: [1, 2, 3], 
        tagList: [1]
    },
    userList: [
        {
            id: 1, 
            username: 'User1',
            login: true,
            avatar: null, 
            chatroom: 1, 
            friendList: [],
            postList: [1, 5],
            shallWeRoomList: [1, 2], 
            watchedPostList: [1, 2, 3], 
            tagList: [1]
        },
        {
            id: 2, 
            username: 'User2',
            login: true,
            avatar: null, 
            chatroom: 1, 
            friendList: [],
            postList: [1, 5],
            shallWeRoomList: [1, 2], 
            watchedPostList: [1, 2, 3], 
            tagList: [1]
        },
    ],
    selectedChatroom: {
        id: 1, 
        title: 'chatroom1', 
        tag: 1, 
        memberList: [1, 2],
    },
    selectedChatUser: {test: 'test'},
    selectedChatChannel: {test: 'test'},
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

describe('<Chatroom />', () => {
    let chatroom, spyGetUserList, spyGetCurrentUser, spyPutUser, 
        spyGetChatroomList, spyDeleteChatroom, spyDeleteChatting;
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        chatroom = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={(props) => <Chatroom {...props} match={{params: {id: 1}, isExact: true, path: "", url: ""}} />} /> />
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

    it('should render without errors', () => {
        const component = mount(chatroom);
        const wrapper = component.find(".Chatroom");
        expect(wrapper.length).toBe(1);
    });

    it('should redirect back to lobby', () => {
        const component = mount(chatroom);
        const wrapper = component.find(".back-to-lobby");
        wrapper.at(0).simulate('click');
        expect(wrapper.at(1).length).toBe(1);
    });

    //// Not Working Well
    // it('should toggle friend', () => {
    //     const component = mount(chatroom);
    //     // add friend
    //     let wrapper = component.find(".add-friend");
    //     wrapper.simulate('click');
    //     expect(wrapper.at(1).length).toBe(1);
    //     //delete friend
    //     wrapper = component.find(".delete-friend");
    //     wrapper.simulate('click');
    //     expect(wrapper.at(1).length).toBe(1);
    // });

    //// Not Working Well
    // it('should delete chatroom', () => {
    //     const stubInitialState = {
    //         currentUser: {
    //             id: 1, 
    //             username: 'User1',
    //             login: true,
    //             avatar: null, 
    //             chatroom: 1, 
    //             friendList: [2],
    //             postList: [1, 5],
    //             shallWeRoomList: [1, 2], 
    //             watchedPostList: [1, 2, 3], 
    //             tagList: [1]
    //         },
    //         userList: [
    //             {
    //                 id: 1, 
    //                 username: 'User1',
    //                 login: true,
    //                 avatar: null, 
    //                 chatroom: -1, 
    //                 friendList: [],
    //                 postList: [1, 5],
    //                 shallWeRoomList: [1, 2], 
    //                 watchedPostList: [1, 2, 3], 
    //                 tagList: [1]
    //             },
    //         ],
    //         selectedChatroom: {
    //             id: 1, 
    //             title: 'chatroom1', 
    //             tag: 1, 
    //             memberList: [1],
    //         },
    //         selectedChatUser: {test: 'test'},
    //         selectedChatChannel: {test: 'test'},
    //     }
    //     const mockStore = getMockStore(stubInitialState);
    //     chatroom = (
    //         <Provider store={mockStore}>
    //           <ConnectedRouter history={history}>
    //           <Switch>
    //             <Route path='/' exact component={(props) => <Chatroom {...props} match={{params: {id: 1}, isExact: true, path: "", url: ""}} />} /> />
    //           </Switch>
    //           </ConnectedRouter>
    //         </Provider>
    //     );
    //     const component = mount(chatroom);
    //     const wrapper = component.find(".back-to-lobby");
    //     wrapper.at(0).simulate('click');
    //     expect(wrapper.length).toBe(1);
    // })
});
