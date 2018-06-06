import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ContainerReviews from '../client/src/components/ContainerReviews';

configure({ adapter: new Adapter() });

describe('ContainerReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<ContainerReviews />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});