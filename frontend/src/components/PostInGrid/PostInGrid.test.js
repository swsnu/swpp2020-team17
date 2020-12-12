import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import GridPost from './PostInGrid';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';

jest.mock('react-photo-gallery', () => {
    return jest.fn(props => {
        return (
            <div className="spyGallery" onClick={jest.fn()}/>
        )
    });
});

const stubInitialState = {
    postList: [
        {
            id: 1,
            image: null, 
            content: 'content 1', 
            author: 1, 
            tag: 1
        },
        {
            id: 1,
            image: null, 
            content: 'content 2', 
            author: 2, 
            tag: 2
        }
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

describe('<PostInGrid />', () => {
    let gridPost, spyGetPostList, spyGetCurrentUser;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        gridPost = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={(props) => <GridPost {...props} selectedTagList={[1,2]} />} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetPostList = jest.spyOn(postActionCreators, 'getPostList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render without errors', () => {
        const component = mount(gridPost);
        let wrapper = component.find(".PostInGrid");
        expect(wrapper.length).toBe(1);
    });
});