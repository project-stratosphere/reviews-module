import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReviewEntry from '../client/src/components/ReviewEntry';

configure({ adapter: new Adapter() });

describe('ReviewEntry', () => {
  it('should render correctly', () => {
    const output = shallow(<ReviewEntry />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
