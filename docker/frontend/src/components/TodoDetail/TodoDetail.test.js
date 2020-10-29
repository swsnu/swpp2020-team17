import React from 'react';
import { shallow } from 'enzyme';
import TodoDetail from './TodoDetail';

describe('<TodoDetail />', () => {
  it('should render without errors', () => {
    const component = shallow(<TodoDetail />);
    const wrapper = component.find('.TodoDetail');
    expect(wrapper.length).toBe(1);
  });
})
