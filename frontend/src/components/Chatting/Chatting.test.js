import React from 'react';
import { shallow } from 'enzyme';
import Chatting from './Chatting';

describe('<Chatting />', () => {
    it('should render without errors', () => {
        const component = shallow(<Chatting chatClient={null} channel={null}/>);
        const wrapper = component.find('.Chatting');
        //expect(wrapper.length).toBe(1);
    });
})