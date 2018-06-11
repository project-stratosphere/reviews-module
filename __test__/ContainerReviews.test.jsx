import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ContainerReviews from '../client/src/components/ContainerReviews';

import { processReviewsArray } from '../client/src/helpers/apphelpers';

configure({ adapter: new Adapter() });

const processedDummyReviews = [
  {
    review_date: 'February 2017',
    review_text: 'Debitis sequi id nam optio iste molestias dolores dolorem ex.',
    first_name: 'Peggie',
    last_name: 'Oberbrunner',
    key: 0,
  },
  {
    review_date: 'October 2016',
    review_text: 'Dolore doloribus eius numquam sunt sapiente quos officia quod nulla.',
    first_name: 'Jasmin',
    last_name: 'Schmidt',
    key: 1,
  },
];

describe('ContainerReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<ContainerReviews reviews={processedDummyReviews} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
