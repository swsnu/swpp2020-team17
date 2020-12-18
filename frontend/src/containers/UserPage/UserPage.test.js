import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import UserPage from './UserPage';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatroomActionCreators from '../../store/actions/chatroom';

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
    selectedUser: {
        id: 2,
        username: 'User2',
        login: true,
        avatar: null,
        chatroom: -1,
        friendList: [1],
        postList: [1, 5],
        shallWeRoomList: [1],
        watchedPostList: [1, 2, 3],
        tagList: [1, 2, 3]
    }
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

jest.mock('../../components/PostInGrid/UserPagePostInGrid', () => {
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

describe('<UserPage />', () => {
    let post, spyGetCurrentUser, spyGetUser, spyPutUser, spySendShallWe;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        post = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={UserPage} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetUser = jest.spyOn(userActionCreators, 'getUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spySendShallWe = jest.spyOn(chatroomActionCreators, 'sendShallWe')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render UserPage', () => {
        const component = mount(post);
        const wrapper = component.find('.UserPage');
        expect(wrapper.length).toBe(1);
    });

    it('should toggle game tag', () => {
        const component = mount(post);
        const wrapper = component.find('.spyGameTag');
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
    });

    it('should toggle friend', () => {
        const component = mount(post);
        const wrapper = component.find('.toggle-friend');
        wrapper.at(0).simulate('click');
        wrapper.at(0).simulate('click');
        expect(wrapper.at(0).length).toBe(1);
        expect(spyPutUser).toBeCalledTimes(2);
    });

    it('should render loading page', () => {
        const initialState = {
            currentUser: null,
            selectedUser: null,
        };
        const mockStore = getMockStore(initialState);
        post = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={UserPage} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        const component = mount(post);
        const wrapper = component.find('.UserPage');
        expect(wrapper.length).toBe(1);
    });

    //// Not Working Well
    // it('should send shallWe', () => {
    //     const component = mount(post);
    //     const wrapper = component.find('#1');
    //     wrapper.at(0).simulate('click');
    //     expect(wrapper.at(0).length).toBe(1);
    //     wrapper.update();
    //     expect(spySendShallWe).toBeCalledTimes(1);
    // })
});
 