import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReviewStarsByDescriptor from '../client/src/components/ReviewStarsByDescriptor';

configure({ adapter: new Adapter() });

describe('ReviewStarsByDescriptor', () => {
  it('should render correctly', () => {
    const output = shallow(<ReviewStarsByDescriptor />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
