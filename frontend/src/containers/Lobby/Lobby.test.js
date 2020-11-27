import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Button } from 'antd';

import Lobby from './Lobby';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as tagActionCreators from '../../store/actions/tag';
import * as chatroomActionCreators from '../../store/actions/chatroom';

jest.mock('../../components/ChatroomList/ChatroomList', () => {
    return jest.fn(props => {
        if (props.isShallWe) {
            return (
                <div className="spyChatroomList">
                    <div className="click-sure-button" onClick={props.onClickSure} />
                    <div className="click-sorry-button" onClick={props.onClickSorry} />
                </div>
            )
        } else {
            return (
                <div className="spyChatroomList">
                    <div className="click-join-button" onClick={props.onClickJoin} />
                </div>
            )
        }
    });
});

jest.mock('../../components/GameTag/GameTag', () => {
    return jest.fn(props => {
        return (
            <div className="spyGameTag" onClick={props.onClick}/>
        )
    })
})

const stubInitialState = {
    currentUser: {
        id: 1, 
        username: 'User1',
        login: true,
        avatar: null, 
        chatroom: -1, 
        friendList: [2],
        postList: [1, 5],
        shallWeRoomList: [1], 
        watchedPostList: [1, 2, 3], 
        tagList: [1, 2]
    },
    chatroomList: [
        {
            id: 1, 
            isGlobal: true, 
            title: 'chatroom1', 
            tag: 1, 
            maxPersonnel: 10, 
            discordLink: null,
        },
        {
            id: 2, 
            isGlobal: false, 
            title: 'chatroom2', 
            tag: 2, 
            maxPersonnel: 20, 
            discordLink: null,
        }
    ],
    tagList: [
        {
            id: 1,
            name: 'LOL',
        },
        {
            id: 2,
            name: 'HearthStone',
        }
    ],
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

describe('<Lobby />', () => {
    let lobby, spyGetCurrentUser, spyPutUser, spyGetTagList, spyGetChatroomList, spyPutChatroom, spyDeleteChatroom;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        lobby = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={Lobby} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );

        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetTagList = jest.spyOn(tagActionCreators, 'getTagList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetChatroomList = jest.spyOn(chatroomActionCreators, 'getChatroomList')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutChatroom = jest.spyOn(chatroomActionCreators, 'putChatroom')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeleteChatroom = jest.spyOn(chatroomActionCreators, 'deleteChatroom')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render ChatroomList', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList');
        expect(wrapper.length).toBe(2);
    });

    it('should handle onClickSure button', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList .click-sure-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should handle onClickSorry button', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList .click-sorry-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should handle onClickJoin button', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList .click-join-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should handle onClickJoin button', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList .click-join-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should handle onToggleTag button', () => {
        const component = mount(lobby);
        let lobbyInstance = component.find(Lobby.WrappedComponent).instance();
        expect(lobbyInstance.state.selectedTagList).toEqual([1, 2]);
        const wrapper = component.find('.spyGameTag');
        expect(wrapper.length).toBe(2);
        wrapper.at(0).simulate('click');
        lobbyInstance = component.find(Lobby.WrappedComponent).instance();
        expect(lobbyInstance.state.selectedTagList).toEqual([2]);
        wrapper.at(1).simulate('click');
        lobbyInstance = component.find(Lobby.WrappedComponent).instance();
        expect(lobbyInstance.state.selectedTagList).toEqual([]); 
    });

    it('should handle onClickCreateRoom button', () => {
        const spyHistoryPush = jest.spyOn(history, 'push')
            .mockImplementation(path => {});
        const component = mount(lobby);
        const wrapper = component.find('#create-chatroom-button');
        wrapper.at(0).simulate('click');
        expect(spyHistoryPush).toBeCalledTimes(1);
    });

    it('should handle onClickCreateRoom button', () => {
        const spyHistoryPush = jest.spyOn(history, 'push')
            .mockImplementation(path => {});
        const component = mount(lobby);
        const wrapper = component.find('#create-chatroom-button');
        wrapper.at(0).simulate('click');
        expect(spyHistoryPush).toBeCalledTimes(1);
    });
});