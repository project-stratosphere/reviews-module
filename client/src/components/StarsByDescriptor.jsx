import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarsByDescriptor = props => (
  <StarRatings
    rating={props.avg}
    starDimension="18px"
    starSpacing="2px"
    starRatedColor="#008489"
  />
);

StarsByDescriptor.propTypes = { avg: PropTypes.number };

StarsByDescriptor.defaultProps = { avg: 1 };

export default StarsByDescriptor;
