import React from 'react';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry';

import { Wrapper } from './styles/ContainerReviews.styles';

const ContainerReviews = props => (
  <Wrapper>
    {props.reviews.map(review => <ReviewEntry key={review.key} review={review} />)}
  </Wrapper>
);

ContainerReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_date: PropTypes.string,
    review_text: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    key: PropTypes.number,
  })),
};

ContainerReviews.defaultProps = {
  reviews: [{
    review_date: '2016-11-04',
    review_text: 'Laborum eius id rerum et in ratione',
    first_name: 'Toby',
    last_name: 'Keith',
    key: 0,
  }],
};

export default ContainerReviews;
