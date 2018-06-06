import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ContainerAverageStars from '../client/src/components/ContainerAverageStars';

configure({ adapter: new Adapter() });

describe('ContainerAverageStars', () => {
  it('should render correctly', () => {
    const output = shallow(<ContainerAverageStars />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
