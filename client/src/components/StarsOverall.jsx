import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarsOverall = props => (
  <StarRatings
    rating={props.overallAvg}
    starDimension="20px"
    starSpacing="2px"
    starRatedColor="#008489"
  />
);

StarsOverall.propTypes = { overallAvg: PropTypes.number };

StarsOverall.defaultProps = { overallAvg: 1 };

export default StarsOverall;
