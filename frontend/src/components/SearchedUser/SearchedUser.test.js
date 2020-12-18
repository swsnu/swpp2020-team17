import React from 'react';
import { shallow } from 'enzyme';
import SearchedUser from './SearchedUser';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe('<SearchedUser />', () => {
    it('should render without errors', () => {
        const component = shallow(<SearchedUser />);
        const wrapper = component.find('.SearchedUser');
        expect(wrapper.length).toBe(1);
    });
    
    it('should render without errors when avatar=null', () => {
        const component = shallow(<SearchedUser avatar={null} />);
        const wrapper = component.find('.SearchedUser');
        expect(wrapper.length).toBe(1);
    });

    it('should redirect when avatar is clicked', () => {
        let component = shallow(<SearchedUser />);
        let wrapper = component.find('.avatar');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);

        // when avatar=null
        component = shallow(<SearchedUser avatar={null} />);
        wrapper = component.find('.avatar');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });

    it('should add or delete user', () => {
        let component = shallow(<SearchedUser onButtonClick={jest.fn()} addOrDelete={'Delete'}/>);
        let wrapper = component.find('.addordelete-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        component = shallow(<SearchedUser onButtonClick={jest.fn()} addOrDelete={'Add'}/>);
        wrapper = component.find('.addordelete-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);

        // when avatar=null
        component = shallow(<SearchedUser avatar={null} onButtonClick={jest.fn()} addOrDelete={'Add'}/>);
        wrapper = component.find('.addordelete-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        component = shallow(<SearchedUser avatar={null} onButtonClick={jest.fn()} addOrDelete={'Delete'}/>);
        wrapper = component.find('.addordelete-button');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    })
})