import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import Search from './Search';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as tagActionCreators from '../../store/actions/tag';

jest.mock('../../components/SearchedUser/SearchedUser', () => {
    return jest.fn(props => {
        return (
            <div className="spySearchedUser">
                <div className="click-searched-user" onClick={props.onButtonClick} /> 
            </div>
        )
    });
});

jest.mock('../../components/SearchedTag/SearchedTag', () => {
    return jest.fn(props => {
        return (
            <div className="spySearchedTag">
                <div className="click-searched-tag" onClick={props.onButtonClick}/>
            </div>
        )
    });
});

const stubInitialState = {
    userList: [
        {
            id: 1, 
            username: 'USER1',
            login: true,
            avatar: null, 
            chatroom: -1, 
            friendList: [],
            postList: [1, 5],
            shallWeRoomList: [1, 2], 
            watchedPostList: [1, 2, 3], 
            tagList: [1]
        },
        {
            id: 2, 
            username: 'USER2',
            login: false,
            avatar: null, 
            chatroom: 1, 
            friendList: [1],
            postList: [],
            shallWeRoomList: [3], 
            watchedPostList: [2, 3], 
            tagList: [2]
        },
        {
            id: 3, 
            username: 'USER3',
            login: false,
            avatar: null, 
            chatroom: 1, 
            friendList: [1],
            postList: [],
            shallWeRoomList: [3], 
            watchedPostList: [2, 3], 
            tagList: [2]
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

const mockStore = getMockStore(stubInitialState);

describe('<Search />', () => {
    let search, spyGetUserList, spyGetCurrentUser, spyPutUser, spyGetTagList;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        search = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={Search} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetUserList = jest.spyOn(userActionCreators, 'getUserList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetTagList = jest.spyOn(tagActionCreators, 'getTagList')
            .mockImplementation(user => { return dispatch => {}; });
    })

    it('should search blank', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual(null);
    });

    it('should search tag in tagList', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('LOL');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual('lol');
        
        wrapper = component.find(".click-searched-tag");
        expect(wrapper.length).toBe(1);
    });

    it('should search tag not in tagList', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('HearthStone');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual('hearthstone');
        
        wrapper = component.find(".click-searched-tag");
        expect(wrapper.length).toBe(1);
    });

    it('should search current user', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('USER1');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual('user1');
    });

    it('should search user who is friend', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('USER2');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual('user2');
        wrapper = component.find(".spySearchedUser .click-searched-user");
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should search user who is not a friend', () => {
        const component = mount(search);
        let wrapper = component.find("#search-bar");
        expect(wrapper.length).toBe(1);
        wrapper.props().onSearch('USER3');
        const searchInstance = component.find(Search.WrappedComponent).instance();
        expect(searchInstance.state.searchInput).toEqual('user3');
        wrapper = component.find(".spySearchedUser .click-searched-user");
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
});