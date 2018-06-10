import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import StarsOverall from '../client/src/components/StarsOverall';

configure({ adapter: new Adapter() });

const dummyOverallAvg = 3.7;

describe('StarsOverall', () => {
  it('should render correctly', () => {
    const output = shallow(<StarsOverall overallAvg={dummyOverallAvg} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
