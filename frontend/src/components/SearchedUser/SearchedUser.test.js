import React from 'react';
import { shallow } from 'enzyme';
import SearchedUser from './SearchedUser';
import { Avatar } from 'antd';

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

    // it('should redirect when avatar is clicked', () => {
    //     const component = shallow(<SearchedUser avatar={'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg'} />);
    //     const wrapper = component.find('.SearchedUser .left .Avatar');
    //     wrapper.simulate('click');
    //     expect(wrapper.length).toBe(1);
    // });
})