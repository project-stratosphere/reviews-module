import React from 'react';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry';

const ContainerReviews = props => (
  <div>
    <h3> Reviews Container </h3>
    <ReviewEntry review={props.reviews[0]} />
  </div>
);

ContainerReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_date: PropTypes.string,
    review_text: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  })),
};

ContainerReviews.defaultProps = {
  reviews: [{
    review_date: '2016-11-04',
    review_text: 'Laborum eius id rerum et in ratione',
    first_name: 'Toby',
    last_name: 'Keith',
  }],
};

export default ContainerReviews;
