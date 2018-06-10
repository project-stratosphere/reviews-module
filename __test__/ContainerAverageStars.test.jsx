import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ContainerAverageStars from '../client/src/components/ContainerAverageStars';

configure({ adapter: new Adapter() });

const dummyAverageStarsObj = {
  overallAvg:2.9,
  accuracyAvg:2.85,
  communicationAvg: 2.77,
  cleanlinessAvg: 3.54,
  locationAvg: 2.62,
  checkinAvg: 3.23,
  valueAvg: 2.38,
  numReviews: 13
};

describe('ContainerAverageStars', () => {
  it('should render correctly', () => {
    const output = shallow(<ContainerAverageStars averageStarsObj={dummyAverageStarsObj} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
