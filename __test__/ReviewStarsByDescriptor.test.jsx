import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReviewStarsByDescriptor from '../client/src/components/ReviewStarsByDescriptor';

configure({ adapter: new Adapter() });

const dummyProps = {
  accuracyAvg: 2.4,
  communicationAvg: 1.8,
  cleanlinessAvg: 2.3,
  locationAvg: 4.4,
  checkinAvg: 1.1,
  valueAvg: 3.0,
};

describe('ReviewStarsByDescriptor', () => {
  it('should render correctly', () => {
    const output = shallow(<ReviewStarsByDescriptor
      accuracyAvg={dummyProps.accuracyAvg}
      communicationAvg={dummyProps.communicationAvg}
      cleanlinessAvg={dummyProps.cleanlinessAvg}
      locationAvg={dummyProps.locationAvg}
      checkinAvg={dummyProps.checkinAvg}
      valueAvg={dummyProps.valueAvg}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
