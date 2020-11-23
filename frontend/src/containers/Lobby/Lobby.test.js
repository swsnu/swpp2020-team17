import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Button } from 'antd';

import Lobby from './Lobby';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import userActionCreators from '../../store/actions/user';
import tagActionCreators from '../../store/actions/tag';

jest.mock('../../components/ChatroomList/ChatroomList', () => {
    return jest.fn(props => {
        return (
            <div className="spyChatroomList">
            </div>
        )
    });
});

const stubInitialState = {
    userList: null,
    selectedUser: null,
    currentUser: null,
    chatroomList: null,
    selectedChatroom: null,
    tagList: null,
}

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
        spyGetChatroomList = jest.spyOn(tagActionCreators, 'getChatroomList')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutChatroom = jest.spyOn(tagActionCreators, 'putChatroom')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeleteChatroom = jest.spyOn(tagActionCreators, 'deleteChatroom')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render ChatroomList', () => {
        const component = mount(lobby);
        const wrapper = component.find('.spyChatroomList');
        expect(wrapper.length).toBe(1);
        //expect(wrapper.at(0).text()).toBe('ARTICLE_TITLE');
    });
});