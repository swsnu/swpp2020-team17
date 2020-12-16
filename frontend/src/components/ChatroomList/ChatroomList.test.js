import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import ChatroomList from './ChatroomList';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

import * as userActionCreators from '../../store/actions/user';
import * as chatActionCreators from '../../store/actions/chatroom';

jest.mock('antd', () => {
    return jest.fn(props => {
        return (
            <div className="spyantd" onClick={jest.fn()}/>
        )
    });
});

const propsList = [
    {
        id: 1, 
        title: 'chatroom1', 
        tag: 1, 
        memberList: [1, 2],
    },
]

const stubInitialState = {
    chatroomList: [
        {
            id: 1, 
            title: 'chatroom1', 
            tag: 1, 
            memberList: [1, 2],
        },
        {
            id: 1, 
            title: 'chatroom2', 
            tag: 2, 
            memberList: [3],
        },
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

describe('<ChatroomList />', () => {
    let chatroomList, spyGetCurrentUser, spyPutUser, spyGetChatroomList, spyDeleteChatroom, spyCreateChatting;
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
       chatroomList = (
            <Provider store={mockStore}>
              <ConnectedRouter history={history}>
              <Switch>
                <Route path='/' exact component={(props) => 
                    <ChatroomList {...props} 
                        isShallWe={true}
                        list={propsList}
                    />} 
                />
              </Switch>
              </ConnectedRouter>
            </Provider>
        );
        spyGetCurrentUser = jest.spyOn(userActionCreators, 'getCurrentUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyPutUser = jest.spyOn(userActionCreators, 'putUser')
            .mockImplementation(() => { return dispatch => {}; });
        spyGetChatroomList = jest.spyOn(chatActionCreators, 'getChatroomList')
            .mockImplementation(() => { return dispatch => {}; }); 
        spyDeleteChatroom = jest.spyOn(chatActionCreators, 'deleteChatroom')
            .mockImplementation(() => { return dispatch => {}; });
        spyCreateChatting = jest.spyOn(chatActionCreators, 'createChatting')
            .mockImplementation(() => { return dispatch => {}; });
    })

    // it('should render without errors', () => {
    //     const component = mount(chatroomList);
    //     let wrapper = component.find(".ChatroomList");
    //     expect(wrapper.length).toBe(1);
    // });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import ChatroomList from './ChatroomList';

// describe('<ChatroomList />', () => {
//     const fakeList = [
//         {
//             id: 1, 
//             title: 'chatroom1', 
//             tag: 1, 
//             memberList: [1, 2],
//         }
//     ]
//     const fakeTagList = [
//         {
//             id: 1,
//             name: 'LOL'
//         }
//     ]
//     let onClick;
//     beforeEach(() => {
//         onClick = jest.fn();
//     })
//     it('should render without errors', () => {
//         const component = shallow(<ChatroomList list={fakeList} tagList={fakeTagList} isShallWe={false} onClickJoin={onClick}/>);
//         const wrapper = component.find('.ChatroomList');
//         expect(wrapper.length).toBe(1);
//     });

//     it('should render without errors when isShallWe=true', () => {
//         const component = shallow(<ChatroomList list={fakeList} tagList={fakeTagList} isShallWe={true} onClickSorry={onClick} onClickSure={onClick}/>);
//         const wrapper = component.find('.ChatroomList');
//         expect(wrapper.length).toBe(1);
//     });
// });