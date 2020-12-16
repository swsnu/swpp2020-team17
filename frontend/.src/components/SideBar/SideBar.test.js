import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({
    push: mockHistoryPush,
    }),
}));

describe('<SideBar />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('should render without errors', () => {
        const component = shallow(<SideBar />);
        const wrapper = component.find('.SideBar');
        expect(wrapper.length).toBe(1);
    });

    it('should handle post click', () => {
        const component = shallow(<SideBar />);
        const wrapper = component.find('.SideBar #post-menu');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        expect(mockHistoryPush).toBeCalledTimes(1);
    });
    
    it('should handle lobby click', () => {
        const component = shallow(<SideBar />);
        const wrapper = component.find('.SideBar #lobby-menu');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        expect(mockHistoryPush).toBeCalledTimes(1);
    });
    it('should handle search click', () => {
        const component = shallow(<SideBar />);
        const wrapper = component.find('.SideBar #search-menu');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        expect(mockHistoryPush).toBeCalledTimes(1);
    });
    it('should handle myPage click', () => {
        const component = shallow(<SideBar />);
        const wrapper = component.find('.SideBar #my-page-menu');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
        expect(mockHistoryPush).toBeCalledTimes(1);
    });
})