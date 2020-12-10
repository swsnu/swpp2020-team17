import React from 'react';
import { shallow } from 'enzyme';
import Author from './Author';

describe('<Author />', () => {
    it('should render without errors', () => {
        const component = shallow(<Author />);
        const wrapper = component.find('.Author');
        expect(wrapper.length).toBe(1);
    });
    
    it('should render without errors when avatar=null', () => {
        const component = shallow(<Author avatar={null} />);
        const wrapper = component.find('.Author');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when showOnline=true', () => {
        const component = shallow(<Author showOnline={true} />);
        const wrapper = component.find('.Author');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when showOnline=false', () => {
        const component = shallow(<Author showOnline={true} />);
        const wrapper = component.find('.Author');
        expect(wrapper.length).toBe(1);
    });
})