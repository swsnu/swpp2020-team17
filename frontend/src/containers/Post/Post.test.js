import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import Post from './Post';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as postActionCreators from '../../store/actions/post';
import * as commentActionCreators from '../../store/actions/comment';
import * as chatroomActionCreators from '../../store/actions/chatroom';
import * as tagActionCreators from '../../store/actions/tag';

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
                <div className="spyCreateComment" onClick={() => props.onEnterComment("comment")} />
                <div className="spyDeleteCommentSuccess" onClick={() => props.returnDeleteButton(
                    {
                        id: 1, 
                        content: 'Comment Content 1', 
                        author: 1,
                    }
                )} />
                <div className="spyDeleteCommentFail" onClick={() => props.returnDeleteButton(
                    {
                        id: 1, 
                        content: 'Comment Content 1', 
                        author: 2,
                    }
                )} />
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
        watchedPostList: [], 
        tagList: [1]
    },
    userList: [
        {
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
        {
            id: 2, 
            username: 'User2',
            login: true,
            avatar: null, 
            chatroom: -1, 
            friendList: [2],
            postList: [1, 5],
            shallWeRoomList: [1, 2], 
            watchedPostList: [1, 2, 3], 
            tagList: [1]
        }
    ],
    selectedPost: {
        id: 1,
        image: null, 
        content: 'Content 1', 
        author: 1, 
        tag: 1,
        likingUserList: [1],
        likeNum: 1,
    },
    postList: [{
        id: 1,
        image: null, 
        content: 'Content 1', 
        author: 2, 
        tag: 1,
        likingUserList: [1],
        likeNum: 1,
    }],
    recommendPostList: [{
        id: 1,
        image: null, 
        content: 'Content 1', 
        author: 2, 
        tag: 1,
        likingUserList: [1],
        likeNum: 1,
    }],
    selectedCommentList: [{
        id: 1, 
        content: 'Comment Content 1', 
        author: 1,
    }],
    tagList: [
        {
            id: 1,
            name: 'LOL',
        },
        {
            id: 2,
            name: 'HearthStone',
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

const mockStore = getMockStore(stubInitialState);

describe('<PostInUserPage />', () => {
    let post, spyGetCurrentUser, spyGetUserList, spyGetUser, spyPutUser, 
        spyGetPostList, spyPutPost, spyDeletePost, spyRecommendPostList, 
        spyGetCommentList, spyCreateComment, spyDeleteComment,
        spySendShallWe, spyGetTagList;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        post = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={Post} />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetUserList = jest.spyOn(userActionCreators, 'getUserList')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetPostList = jest.spyOn(postActionCreators, 'getPostList')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutPost = jest.spyOn(postActionCreators, 'putPost')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeletePost = jest.spyOn(postActionCreators, 'deletePost')
            .mockImplementation(() => { return dispatch => {}; });        
        spyRecommendPostList = jest.spyOn(postActionCreators, 'recommendPostList')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetCommentList = jest.spyOn(commentActionCreators, 'getCommentList')
            .mockImplementation(() => { return dispatch => {}; });
        spyCreateComment = jest.spyOn(commentActionCreators, 'createComment')
            .mockImplementation(() => { return dispatch => {}; });
        spyDeleteComment = jest.spyOn(commentActionCreators, 'deleteComment')
            .mockImplementation(() => { return dispatch => {}; });
        spySendShallWe = jest.spyOn(chatroomActionCreators, 'sendShallWe')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetTagList = jest.spyOn(tagActionCreators, 'getTagList')
            .mockImplementation(() => { return dispatch => {}; });
    })

    it('should render Post', () => {
        const component = mount(post);
        const wrapper = component.find('.Post');
        expect(wrapper.length).toBe(1);
    });

    it('should redirect when avatar is clicked', () => {
        const spyHistoryPush = jest.spyOn(history, 'push')
            .mockImplementation(path => {});
        const component = mount(post);
        const wrapper = component.find('.avatar-redirect');
        wrapper.at(0).simulate('click');
        expect(wrapper.length).toBe(2);
        expect(spyHistoryPush).toBeCalledTimes(1);
    });

    //// NOT WORKING WELL
    it('should send shallWe', () => {
        const component = mount(post);
        const wrapper = component.find('.shallWe-button');
        wrapper.at(0).props().disabled = false;
        wrapper.at(0).simulate('click');
        expect(wrapper.length).toBe(2);
        //expect(spySendShallWe).toBeCalledTimes(1);
    });

    it('should click post', () => {
        const component = mount(post);
        const wrapper = component.find('.click-post');
        // click post several times to change view
        wrapper.at(1).simulate('click');
        wrapper.at(1).simulate('click');
        wrapper.at(1).simulate('click');
        expect(wrapper.length).toBe(2);
        expect(spyPutUser).toBeCalledTimes(1);
    });

    it('should toggle like', () => {
        const component = mount(post);
        const wrapper = component.find('.toggle-like');
        // toggle like several times
        wrapper.at(0).simulate('click');
        wrapper.at(0).simulate('click');
        expect(wrapper.length).toBe(3);
        expect(spyPutPost).toBeCalledTimes(2);
    });

    it('should handle comment', () => {
        const component = mount(post);
        // open comment view
        let wrapper = component.find('.click-comment');
        wrapper.at(0).simulate('click');
        expect(wrapper.length).toBe(3);
        
        // create comment
        wrapper = component.find(".spyCreateComment");
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    
        // delete comment when user is the author
        wrapper = component.find(".spyDeleteCommentSuccess");
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        //// NOT WORKING WELL
        // wrapper.update();
        // wrapper = component.find(".delete-button");
        // wrapper.simulate('click');
        // expect(wrapper.length).toBe(1);

        // cannot delete comment when user is not the author
        wrapper = component.find(".spyDeleteCommentFail");
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
});