import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  ReviewUser,
  ReviewDate,
  ReviewText,
} from './styles/ReviewEntry.styles';

const ReviewEntry = props => (
  <Wrapper>
    <ReviewUser> {props.review.first_name} </ReviewUser>
    <ReviewDate> {props.review.review_date} </ReviewDate>
    <ReviewText> {props.review.review_text} </ReviewText>
  </Wrapper>
);

ReviewEntry.propTypes = {
  review: PropTypes.shape({
    review_date: PropTypes.string,
    review_text: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
};

ReviewEntry.defaultProps = {
  review: {
    review_date: '2016-11-04',
    review_text: 'Laborum eius id rerum et in ratione',
    first_name: 'Toby',
    last_name: 'Keith',
  },
};

export default ReviewEntry;
