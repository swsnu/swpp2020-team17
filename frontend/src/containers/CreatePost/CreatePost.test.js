import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';

import CreatePost from './CreatePost';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';
import { createPost } from '../../store/actions/index';

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

const stubPost = {
    tag: 1,
    image: '',
    content: 'content',
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
        const component = mount(create);
        const wrapper = component.find('select');
        expect(wrapper.length).toBe(1);
    })

    // it('should create new post when submit', () => {
    //     const mockClickDone = jest.spyOn(axios, 'post')
    //         .mockImplementation(url => {
    //             return newPromise((resolve, reject) => {
    //                 const result = {
    //                     status: 200,
    //                     data: stubPost
    //                 };
    //                 resolve(result);
    //             })
    //         })
    //     const component = mount(create)
    //     const wrapper = component.find('Button')
    //     wrapper.simulate('onFinish');
    //     expect(mockClickDone).toHaveBeenCalledTimes(1);
    //     mockClickDone();
    //     const submitButton = getByText('Submit')
    //     Simulate.click(submitButton)
    // })
})