import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  SearchField,
} from './styles/SearchReviews.styles';

const SearchReviews = props => (
  <Wrapper>
    <SearchField placeholder="Search reviews" />
  </Wrapper>
);

export default SearchReviews;
