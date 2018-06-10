import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ContainerReviews from '../client/src/components/ContainerReviews';

import { processReviewsArray } from '../client/src/helpers/apphelpers';

configure({ adapter: new Adapter() });

const dummyReviews = [
  {
    review_date: '2017-02-12T08:00:00.000Z',
    review_text: 'Debitis sequi id nam optio iste molestias dolores dolorem ex.',
    first_name: 'Peggie',
    last_name: 'Oberbrunner',
  },
  {
    review_date: '2016-10-19T07:00:00.000Z',
    review_text: 'Dolore doloribus eius numquam sunt sapiente quos officia quod nulla.',
    first_name: 'Jasmin',
    last_name: 'Schmidt',
  },
];

const processedDummyReviews = processReviewsArray(dummyReviews);

describe('ContainerReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<ContainerReviews reviews={processedDummyReviews} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
