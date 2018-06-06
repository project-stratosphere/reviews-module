import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReviewsByDescriptor from '../client/src/components/ReviewsByDescriptor';

configure({ adapter: new Adapter() });

describe('ReviewsByDescriptor', () => {
  it('should render correctly', () => {
    const output = shallow(<ReviewsByDescriptor />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});