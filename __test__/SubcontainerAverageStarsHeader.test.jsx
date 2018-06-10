import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import SubcontainerAverageStarsHeader from '../client/src/components/SubcontainerAverageStarsHeader';

configure({ adapter: new Adapter() });

const dummyProps = {
  overallAvg: 3.4,
  numReviews: 18,
  currentSearch: 'pineapples',
};

describe('SubcontainerAverageStarsHeader', () => {
  it('should render correctly', () => {
    const output = shallow(<SubcontainerAverageStarsHeader
      overallAvg={dummyProps.overallAvg}
      numReviews={dummyProps.numReviews}
      currentSearch={dummyProps.currentSearch}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
