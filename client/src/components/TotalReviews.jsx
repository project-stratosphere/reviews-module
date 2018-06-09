import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import StarsOverall from './StarsOverall';

import {
  Wrapper,
  TotalReviewsTextWrapper,
  StarsOverallWrapper,
} from './styles/TotalReviews.styles';

const TotalReviews = props => (
  <Wrapper>
    <TotalReviewsTextWrapper> {props.numReviews} Reviews </TotalReviewsTextWrapper>
    <StarsOverallWrapper>
      <StarsOverall overallAvg={props.overallAvg} />
    </StarsOverallWrapper>
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
