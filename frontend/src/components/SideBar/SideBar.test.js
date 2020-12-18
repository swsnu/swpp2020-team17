import React from 'react';
import { mount, shallow } from 'enzyme';
import SideBar from './SideBar';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { getMockStore } from '../../test-utils/mocks'
import { history } from '../../store/store'

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
    }
}

const mockStore = getMockStore(stubInitialState);
const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('<SideBar />', () => {
    let sideBar;
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        sideBar = (
            <Provider store={ mockStore }>
                <ConnectedRouter history={ history }>
                    <SideBar />
                </ConnectedRouter>
            </Provider>
        )
    })

    it('should render without errors', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.SideBar');
        expect(wrapper.length).toBe(1);
    });

    it('should handle post click', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.post-menu').at(0);
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should handle lobby click', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.lobby-menu').at(0);
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
    it('should handle search click', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.search-menu').at(0);
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
    it('should handle myPage click', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.my-page-menu').at(0);
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
    it('should handle logout click', () => {
        const component = mount(sideBar);
        const wrapper = component.find('.logout-menu').at(0);
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
    
})