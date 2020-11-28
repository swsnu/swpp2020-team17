import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Button } from 'antd';

import CreateNewPost from './CreatePost';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';
import { createPost } from '../../store/actions';
import { CreatePost } from '../../store/actions/actionTypes';

const stubInitialState = {
    loading: false,
    postList: [],
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
}

const mockStore = getMockStore(stubInitialState);

describe('<CreateNewPost />', () => {
    let create, spyGetCurrentUser, spyCreatePost;
    afterEach(() => {
        jest.clearAllMocks();
    })

    beforeEach(() => {
        create = (
            <Provider store={mockStore}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/' exact component={CreatePost} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );

        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => { }; });
        spyCreatePost = jest.spyOn(postActionCreators, 'createPost')
            .mockImplementation(() => { return dispatch => { }; });
    })

    it('should render Tag select', () => {
        const wrapper = mount(create);
        const answer = wrapper.find('CreatePost');
        expect(answer).toHaveLength(1);
    })
})