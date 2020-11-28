import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('should render without error', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.App');
    expect(wrapper.length).toBe(1);
  });
});