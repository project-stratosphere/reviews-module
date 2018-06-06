import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import TotalReviews from '../client/src/components/TotalReviews';

configure({ adapter: new Adapter() });

describe('TotalReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<TotalReviews />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

