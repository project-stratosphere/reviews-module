import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReviewEntry from '../client/src/components/ReviewEntry';

configure({ adapter: new Adapter() });

const dummyReview = {
  review_date: '2017-02-12T08:00:00.000Z',
  review_text: 'Debitis sequi id nam optio iste molestias dolores dolorem ex.',
  first_name: 'Peggie',
  last_name: 'Oberbrunner',
};

const dummyKey = 3;

describe('ReviewEntry', () => {
  it('should render correctly', () => {
    const output = shallow(<ReviewEntry key={dummyKey} review={dummyReview} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
