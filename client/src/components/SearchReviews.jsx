import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchFieldWrapper,
  SearchField,
} from './styles/SearchReviews.styles';

const SearchReviews = props => (
  <SearchFieldWrapper>
    {console.log(props)}
    <SearchField 
      placeholder="Search reviews" 
      type="text" 
      onChange={props.handleSearchChange}
    />
  </SearchFieldWrapper>
);

export default SearchReviews;
