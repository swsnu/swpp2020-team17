import React from 'react';
import { shallow, mount } from 'enzyme';
import Comment from './Comment';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

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

describe('<Comment />', () => {
    const fakeCurrentUser = {
        id: 1, 
        username: 'User1',
        login: true,
        avatar: null, 
        chatroom: -1, 
        friendList: [],
        postList: [1, 5],
        shallWeRoomList: [1, 2], 
        watchedPostList: [1, 2, 3], 
        tagList: [5]
    }
    const fakeCurrPost = {
        id: 1,
        image: null, 
        content: 'content 1', 
        author: 1, 
        tag: 1
    };
    const fakeCommentingPostId = 1;
    const fakeCommentList = [
        {
            author: 1,
            image: null,
            content: 'Comment Content 1',
            post: 1,
        },
        {
            author: 2,
            image: null,
            content: 'Comment Content 2',
            post: 1,
        },
    ];
    const fakeOnEnterComment = jest.fn();
    const fakeReturnDeleteButton = jest.fn();
    const fakeUserList = [
        {
            id: 1, 
            username: 'User1',
            login: true,
            avatar: null, 
            chatroom: -1, 
            friendList: [],
            postList: [1, 5],
            shallWeRoomList: [1, 2], 
            watchedPostList: [1, 2, 3], 
            tagList: [5]
        },
        {
            id: 2, 
            username: 'User2',
            login: false,
            avatar: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg", 
            chatroom: 1, 
            friendList: [1],
            postList: [],
            shallWeRoomList: [3], 
            watchedPostList: [2, 3], 
            tagList: [4]
        }
    ];
    it('should render without errors', () => {
        const component = shallow(<Comment 
                                    currPost={fakeCurrPost} 
                                    commentingPostId={fakeCommentingPostId}
                                    commentList={fakeCommentList}
                                    onEnterComment={fakeOnEnterComment}
                                    userList={fakeUserList}
                                    returnDeleteButton={fakeReturnDeleteButton} />);
        const wrapper = component.find('.Comment');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when post=null', () => {
        const component = shallow(<Comment 
                                    currPost={null} 
                                    commentingPostId={fakeCommentingPostId}
                                    commentList={fakeCommentList}
                                    onEnterComment={fakeOnEnterComment}
                                    userList={fakeUserList}
                                    returnDeleteButton={fakeReturnDeleteButton} />);
        const wrapper = component.find('.Comment');
        expect(wrapper.length).toBe(1);
    });

    it('should redirect when avatar is clicked', () => {
        let component = mount(<Comment 
                                    currPost={fakeCurrPost} 
                                    commentingPostId={fakeCommentingPostId}
                                    commentList={fakeCommentList}
                                    onEnterComment={fakeOnEnterComment}
                                    userList={fakeUserList}
                                    returnDeleteButton={fakeReturnDeleteButton}
                                    currentUser={fakeCurrentUser} />);
        let wrapper = component.find('.avatar');
        wrapper.at(0).simulate('click');
        wrapper.at(1).simulate('click');
        wrapper.at(2).simulate('click');
        wrapper.at(3).simulate('click');
        expect(wrapper.length).toBe(4);
    });
})