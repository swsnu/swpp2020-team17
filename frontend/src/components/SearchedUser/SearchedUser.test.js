import React from 'react';
import { shallow } from 'enzyme';
import SearchedUser from './SearchedUser';

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
})