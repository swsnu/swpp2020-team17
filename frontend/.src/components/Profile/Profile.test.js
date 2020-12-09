import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
    it('should render without errors', () => {
        const tagList = [1]
        const component = shallow(<Profile tagList={tagList} />);
        const wrapper = component.find('.Profile');
        expect(wrapper.length).toBe(1);
    });
})