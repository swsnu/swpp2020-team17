import React from 'react';
import { shallow } from 'enzyme';
import SearchedTag from './SearchedTag';

describe('<SearchedTag />', () => {
    it('should render without errors', () => {
        const component = shallow(<SearchedTag />);
        const wrapper = component.find('.SearchedTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when id=1', () => {
        const component = shallow(<SearchedTag id={1}/>);
        const wrapper = component.find('.SearchedTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when id=2', () => {
        const component = shallow(<SearchedTag id={2}/>);
        const wrapper = component.find('.SearchedTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when id=3', () => {
        const component = shallow(<SearchedTag id={3}/>);
        const wrapper = component.find('.SearchedTag');
        expect(wrapper.length).toBe(1);
    });
})