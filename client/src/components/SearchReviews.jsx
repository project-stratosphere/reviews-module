import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchFieldWrapper,
  SearchField,
} from './styles/SearchReviews.styles';

const SearchReviews = props => (
  <SearchFieldWrapper>
    <SearchField
      placeholder="Search reviews"
      type="text"
      onChange={props.handleSearchChange}
      onKeyPress={props.handleSearchSubmit}
    />
  </SearchFieldWrapper>
);

SearchReviews.propTypes = {
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
};

SearchReviews.defaultProps = {
  handleSearchChange: () => {},
  handleSearchSubmit: () => {},
};

export default SearchReviews;
