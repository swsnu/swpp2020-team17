import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import PostInUserPage from './PostInUserPage';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';
import * as commentActionCreators from '../../store/actions/comment';
import * as chatroomActionCreators from '../../store/actions/chatroom';

import { HeartTwoTone } from 'antd';

jest.mock('../../components/Author/Author', () => {
    return jest.fn(props => {
        return (
            <div className="spyAuthor" />
        )
    });
});

jest.mock('../../components/Comment/Comment', () => {
    return jest.fn(props => {
        return (
            <div>
                <div className="spyCreateComment" onClick={props.onEnterComment} />
                <div className="spyDeleteComment" onClick={props.onDeleteButton} />
            </div>
        )
    });
});

jest.mock('../../components/GameTag/GameTag', () => {
    return jest.fn(props => {
        return (
            <div className="spyGameTag" />
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
        shallWeRoomList: [1, 2], 
        watchedPostList: [1, 2, 3], 
        tagList: [1]
    },
    userList: [{
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
    }],
    selectedPost: {
        id: 1,
        image: null, 
        content: 'Content 1', 
        author: 1, 
        tag: 1,
        likingUserList: [1],
        likeNum: 1,
    },
    selectedCommentList: [{
        id: 1, 
        content: 'Comment Content 1', 
        author: 1,
    }]
}

const mockStore = getMockStore(stubInitialState);

describe('<PostInUserPage />', () => {
    let postInUserPage, spyGetCurrentUser, spyGetUserList, spyGetPost, spyPutPost, spyDeletePost,
        onGetCommentList, onCreateComment, onDeleteComment, onSendShallWe;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        postInUserPage = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={(props) => <PostInUserPage {...props} match={{params: {id: 1}, isExact: true, path: "", url: ""}} />} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetUserList = jest.spyOn(userActionCreators, 'getUserList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetPost = jest.spyOn(postActionCreators, 'getPost')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutPost = jest.spyOn(postActionCreators, 'putPost')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeletePost = jest.spyOn(postActionCreators, 'deletePost')
            .mockImplementation(() => { return dispatch => {}; });           
        onGetCommentList = jest.spyOn(commentActionCreators, 'getCommentList')
            .mockImplementation(() => { return dispatch => {}; });
        onCreateComment = jest.spyOn(commentActionCreators, 'createComment')
            .mockImplementation(() => { return dispatch => {}; });
        onDeleteComment = jest.spyOn(commentActionCreators, 'deleteComment')
            .mockImplementation(() => { return dispatch => {}; });
        onSendShallWe = jest.spyOn(chatroomActionCreators, 'sendShallWe')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render without errors', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".PostInUserPage");
        expect(wrapper.length).toBe(1);
    });

    it('should handle back button', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".back-button button");
        expect(wrapper.length).toBe(1);
    });

    it('should handle delete button', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".delete-button button");
        expect(wrapper.length).toBe(1);
    });

    it('should create comment', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".spyCreateComment")
        expect(wrapper.length).toBe(1);
    });

    it('should delete comment', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".spyDeleteComment")
        expect(wrapper.length).toBe(1);
    });

    it('should toggle like', () => {
        const component = mount(postInUserPage);
        const wrapper = component.find(".like-toggle");
        expect(wrapper.at(0).length).toBe(1);   
    });

    // it('should click shallWe', () => {
    //     const tmpInitialState = stubInitialState;
    //     tmpInitialState.selectedPost.author = 2;
    //     const tmpMockStore = getMockStore(tmpInitialState);
    //     postInUserPage = (
    //         <Provider store={tmpMockStore}>
    //           <ConnectedRouter history={history}>
    //           <Switch>
    //             <Route path='/' exact component={(props) => <PostInUserPage {...props} match={{params: {id: 1}, isExact: true, path: "", url: ""}} />} />
    //           </Switch>
    //           </ConnectedRouter>
    //         </Provider>
    //     );
    //     const component = mount(postInUserPage);
    //     let wrapper = component.find(".shallWe-button button")
    //     expect(wrapper.length).toBe(1);  
    // });
});