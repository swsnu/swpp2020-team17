import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import MyPage from './MyPage';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';
import * as chatroomActionCreators from '../../store/actions/chatroom';

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
    postList: [
        {
            id: 1,
            image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
            content: "testContent",
            tag: 1,
            likeNum: 0,
            author: 1,
            authorAvatar: null,
            authorName: "testAuthor"
        }
    ],
    userList: [
        {
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
        {
            id: 2,
            username: 'User1',
            login: true,
            avatar: null,
            chatroom: -1,
            friendList: [],
            postList: [1, 5],
            shallWeRoomList: [1],
            watchedPostList: [1, 2, 3],
            tagList: [1, 2]
        }
    ],
}

jest.mock('../../components/Profile/Profile', () => {
    return jest.fn(props => {
        return (
            <div className="spyProfile" />
        )
    });
});

jest.mock('../../components/Author/Author', () => {
    return jest.fn(props => {
        return (
            <div className="spyAuthor" />
        )
    });
});

jest.mock('../../components/PostInGrid/PostInGrid', () => {
    return jest.fn(props => {
        return (
            <div className="spyPostInGrid" />
        )
    });
});

jest.mock('../../components/GameTag/GameTag', () => {
    return jest.fn(props => {
        return (
            <div className="spyGameTag" onClick={props.onClick} />
        )
    });
});

jest.mock('../../csrftoken', () => {
    return jest.fn(props => {
        return (
            <div className="spyCSRF" />
        )
    });
});

const mockStore = getMockStore(stubInitialState);

describe('<MyPage />', () => {
    let post, spyGetCurrentUser, spyGetUserList, 
        spyGetPostList, spySendShallWe;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        post = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={MyPage} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetUserList = jest.spyOn(userActionCreators, 'getUserList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetPostList = jest.spyOn(postActionCreators, 'getPostList')
            .mockImplementation(() => { return dispatch => {}; });
        spySendShallWe = jest.spyOn(chatroomActionCreators, 'sendShallWe')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render MyPage', () => {
        const component = mount(post);
        const wrapper = component.find('.MyPage');
        expect(wrapper.length).toBe(1);
    });

    it('should redirect when avatar is clicked', () => {
        const spyHistoryPush = jest.spyOn(history, 'push')
            .mockImplementation(path => {});
        const component = mount(post);
        const wrapper = component.find('.avatar-redirect');
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
        expect(spyHistoryPush).toBeCalledTimes(1);
    });

    it('should click create post button', () => {
        const component = mount(post);
        const wrapper = component.find('.create-post-button');
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
    });

    it('should toggle game tag', () => {
        const component = mount(post);
        const wrapper = component.find('.spyGameTag');
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
    })
});
 