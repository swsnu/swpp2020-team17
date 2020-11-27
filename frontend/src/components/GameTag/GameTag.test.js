import React from 'react';
import { shallow } from 'enzyme';
import GameTag from './GameTag';

describe('<GameTag />', () => {
    it('should render without errors when isChecked=true', () => {
        const component = shallow(<GameTag isChecked={true} />);
        const wrapper = component.find('.GameTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when tagId=1', () => {
        const component = shallow(<GameTag tagId={1}/>);
        const wrapper = component.find('.GameTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when tagId=2', () => {
        const component = shallow(<GameTag tagId={2}/>);
        const wrapper = component.find('.GameTag');
        expect(wrapper.length).toBe(1);
    });

    it('should render without errors when tagId=3', () => {
        const component = shallow(<GameTag tagId={3}/>);
        const wrapper = component.find('.GameTag');
        expect(wrapper.length).toBe(1);
    });
})