import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('<Comment />', () => {
    const fakeCurrPost = {
        id: 1,
        image: null, 
        content: 'content 1', 
        author: 1, 
        tag: 1
    };
    const fakeCommentingPostId = 1;
    const fakeCommentList = [];
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
})