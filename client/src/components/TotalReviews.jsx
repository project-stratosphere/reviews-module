import React from 'react';
import PropTypes from 'prop-types';

import StarsOverall from './StarsOverall';

import {
  TotalReviewsWrapper,
  TotalReviewsTextWrapper,
  StarsOverallWrapper,
} from './styles/TotalReviews.styles';

const TotalReviews = props => (
  <TotalReviewsWrapper>
    <TotalReviewsTextWrapper> {props.numReviews} Reviews </TotalReviewsTextWrapper>
    <StarsOverallWrapper>
      <StarsOverall overallAvg={props.overallAvg} />
    </StarsOverallWrapper>
  </TotalReviewsWrapper>
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
