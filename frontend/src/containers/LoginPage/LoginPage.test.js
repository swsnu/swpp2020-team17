import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';

jest.mock('../../../node_modules/antd/lib/button', () => {
    return jest.fn(props => {
        return (
            <div className="spyButton" onClick={jest.fn()}/>
        )
    });
});

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
        tagList: [1]
    }
}

const mockStore = getMockStore(stubInitialState);

describe('<RoomInfo />', () => {
    let login, spyLogin;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        login = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={LoginPage} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );

        spyLogin= jest.spyOn(userActionCreators, 'login')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should handle login', () => {
        const component = mount(login);
        let wrapper = component.find('.LoginPage');
        //wrapper.at(0).simulate('click');
        expect(wrapper.length).toBe(1);
        wrapper = component.find('.spyButton');
        expect(wrapper.length).toBe(1);
    });

});