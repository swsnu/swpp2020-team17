import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
    it('should render without errors', () => {
        const component = shallow(<SearchBar />);
        const wrapper = component.find('.SearchBar');
        expect(wrapper.length).toBe(1);
    });
});