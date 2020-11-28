import React from 'react';
import { shallow } from 'enzyme';
import CSRFToken from './csrftoken';
import * as csrftoken from './csrftoken';

describe('CSRFToken ', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render without error', () => {
        const component = shallow(<CSRFToken />);
        const wrapper = component.find('.CSRFToken');
        expect(wrapper.length).toBe(1);
    });

    it ('should get cookie correctly', () => {
        Object.defineProperty(document, 'cookie', {
            get: jest.fn().mockImplementation(() => { return 'temp_cookie'; }),
            set: jest.fn().mockImplementation(() => {}),
        });
        //document.cookie = 'temp_cookie';
        const component = shallow(<CSRFToken />);
        const wrapper = component.find('.CSRFToken');
        expect(wrapper.length).toBe(1);
    });
})