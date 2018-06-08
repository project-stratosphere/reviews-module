import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import {
  Wrapper,
  TotalReviewsText,
} from './styles/TotalReviews.styles';

const TotalReviews = props => (
  <Wrapper>
    <TotalReviewsText> {props.numReviews} Reviews </TotalReviewsText>
    <StarRatings
      rating={props.overallAvg}
      starDimension="18px"
      starSpacing="1px"
      starRatedColor="#008489"
    />
  </Wrapper>
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
