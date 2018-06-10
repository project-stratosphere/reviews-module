import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import TotalReviews from '../client/src/components/TotalReviews';

configure({ adapter: new Adapter() });

const dummyProps = {
  overallAvg: 2.4,
  numReviews: 18,
};

describe('TotalReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<TotalReviews
      overallAvg={dummyProps.overallAvg}
      numReviews={dummyProps.numReviews}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

