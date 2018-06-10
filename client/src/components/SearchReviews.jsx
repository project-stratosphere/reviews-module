import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchFieldWrapper,
  SearchField,
} from './styles/SearchReviews.styles';

const SearchReviews = props => (
  <SearchFieldWrapper>
    <SearchField placeholder="Search reviews" />
  </SearchFieldWrapper>
);

export default SearchReviews;
