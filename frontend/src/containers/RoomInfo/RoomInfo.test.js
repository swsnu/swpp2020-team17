import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Button } from 'antd';

import RoomInfo from './RoomInfo';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatroomActionCreators from '../../store/actions/chatroom';

jest.mock('../../../node_modules/antd/lib/form', () => {
    return jest.fn(props => {
        return (
            <div>
                <div className="spyForm" onClick={props.onFinish} />
            </div>
            
        )
    });
});

jest.mock('../../../node_modules/antd/lib/button', () => {
    return jest.fn(props => {
        return (
            <div className="spyButton" onClick={jest.fn()} />
        )
    });
});

const stubInitialState = {
    currentUser: {
        id: 1, 
        username: 'User1',
        login: true,
        avatar: null, 
        chatroom: 1, 
        friendList: [2],
        postList: [1, 5],
        shallWeRoomList: [1], 
        watchedPostList: [1, 2, 3], 
        tagList: [1]
    }
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

describe('<RoomInfo />', () => {
    let roomInfo, spyGetCurrentUser, spyCreateChatroom;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        roomInfo = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={RoomInfo} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );

        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyCreateChatroom = jest.spyOn(chatroomActionCreators, 'createChatroom')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render without errors', () => {
        const component = mount(roomInfo);
        const wrapper = component.find('.RoomInfo');
        expect(wrapper.length).toBe(1);
    });
    // it('should create chatroom', () => {
    //     const component = mount(roomInfo);
    //     const wrapper = component.find('#save-button');
    //     wrapper.at(0).simulate('click');
    // });

    // it('should redirect back to lobby page', () => {
    //     const spyHistoryPush = jest.spyOn(history, 'push')
    //         .mockImplementation(path => {});
    //     const component = mount(roomInfo);
    //     const wrapper = component.find('#back-button');
    //     expect(wrapper.length).toBe(1);
    //     wrapper.at(0).simulate('click');
    //     expect(spyHistoryPush).toBeCalledTimes(1);
    // });

    // it('should handle button', () => {
    //     const component = mount(roomInfo);
    //     const wrapper = component.find('.spyButton');
    //     expect(wrapper.length).toBe(4);
    // });

    it('should render submit form', () => {
        const component = mount(roomInfo);
        let wrapper = component.find('.spyForm');
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
    });

    // it('should redirect to lobby when chatroom=-1', () => {
    //     const spyHistoryPush = jest.spyOn(history, 'push')
    //         .mockImplementation(path => {});
    //     const stubInitialState = {
    //         currentUser: {
    //             id: 1, 
    //             username: 'User1',
    //             login: true,
    //             avatar: null, 
    //             chatroom: -1, 
    //             friendList: [2],
    //             postList: [1, 5],
    //             shallWeRoomList: [1], 
    //             watchedPostList: [1, 2, 3], 
    //             tagList: [1]
    //         }
    //     };
    //     const mockStore = getMockStore(stubInitialState);
    //     roomInfo = (
    //         <Provider store={mockStore}>
    //           <ConnectedRouter history={history}>
    //           <Switch>
    //             <Route path='/' exact component={RoomInfo} />
    //           </Switch>
    //           </ConnectedRouter>
    //         </Provider>
    //     );
    //     const component = mount(roomInfo);
    //     const wrapper = component.find('#save-button');
    //     wrapper.at(0).simulate('click');
    //     expect(spyHistoryPush).toBeCalledTimes(1);
    // })
});