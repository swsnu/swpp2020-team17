import React from 'react';
import { shallow } from 'enzyme';
import ApplicationRoutes from './ApplicationRoutes';


describe('<ApplicationRoutes />', () => {
    it('should render without errors', () => {
        const component = shallow(<ApplicationRoutes />);
        const wrapper = component.find('.ApplicationRoutes');
        expect(wrapper.length).toBe(1);
    });

})

