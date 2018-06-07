import React from 'react';
import PropTypes from 'prop-types';

const TotalReviews = props => (
  <div id="review-overall-average">
    <h6> 315 Reviews </h6>
    <h6> ***** </h6>
  </div>
);

TotalReviews.propTypes = {
  overallAvg: PropTypes.number,
  numReviews: PropTypes.number,
};

TotalReviews.defaultProps = {
  overallAvg: 1,
  numReviews: 1,
};

export default TotalReviews;
