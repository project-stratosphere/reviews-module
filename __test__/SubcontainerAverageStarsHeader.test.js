import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import SubcontainerAverageStarsHeader from '../client/src/components/SubcontainerAverageStarsHeader';

configure({ adapter: new Adapter() });

describe('SubcontainerAverageStarsHeader', () => {
  it('should render correctly', () => {
    const output = shallow(<SubcontainerAverageStarsHeader />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
