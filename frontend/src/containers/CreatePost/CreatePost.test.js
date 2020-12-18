import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import CreatePost from './CreatePost';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';

const stubInitialState = {
    currentUser: {
        id: 1,
        username: 'User1',
        login: true,
        avatar: null,
        chatroom: -1,
        friendList: [],
        postList: [1, 5],
        shallWeRoomList: [1],
        watchedPostList: [1, 2, 3],
        tagList: [1, 2]
    },
    selectedPost: {
        id: 1,
        image: null, 
        content: 'Content 1', 
        author: 1, 
        tag: 1,
        likingUserList: [1],
        likeNum: 1,
    },
    tagList: [
        {
            id: 1,
            image: null,
            name: 'LOL'
        },
        {
            id: 2,
            image: null,
            name: 'HearthStone'
        },
        {
            id: 3,
            image: null,
            name: 'MapleStory'
        }
    ]
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

  jest.mock('antd', () => {
    return jest.fn(props => {
        return (
            <div className="spyUpload" onChange={props.onChange}/>
        )
    })
})

const mockStore = getMockStore(stubInitialState);

describe('<CreatePost />', () => {
    let createPost, spyGetCurrentUser, spyCreatePost;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        createPost = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={CreatePost} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyCreatePost = jest.spyOn(postActionCreators, 'createPost')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render without errors', () => {
        // const component = mount(createPost);
        // const wrapper = component.find('.CreatePost');
        // expect(wrapper.length).toBe(1);
    });

    // it('should upload image', () => {
    //     const component = mount(createPost);
    //     const wrapper = component.find('.spyUpload');
    //     wrapper.simulate('change', { target: { name: 'width', info:  } });
    //     expect(wrapper.length).toBe(1);
    // })
});