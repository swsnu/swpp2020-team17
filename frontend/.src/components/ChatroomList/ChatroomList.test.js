import React from 'react';
import { shallow } from 'enzyme';
import ChatroomList from './ChatroomList';

describe('<ChatroomList />', () => {
    const fakeList = [
        {
            id: 1, 
            title: 'chatroom1', 
            tag: 1, 
            memberList: [1, 2],
        }
    ]
    const fakeTagList = [
        {
            id: 1,
            name: 'LOL'
        }
    ]
    let onClick;
    beforeEach(() => {
        onClick = jest.fn();
    })
    it('should render without errors', () => {
        const component = shallow(<ChatroomList list={fakeList} tagList={fakeTagList} isShallWe={false} onClickJoin={onClick}/>);
        const wrapper = component.find('.ChatroomList');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when isShallWe=true', () => {
        const component = shallow(<ChatroomList list={fakeList} tagList={fakeTagList} isShallWe={true} onClickSorry={onClick} onClickSure={onClick}/>);
        const wrapper = component.find('.ChatroomList');
        expect(wrapper.length).toBe(1);
    });
});