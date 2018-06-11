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
      value={props.currentSearch}
      onChange={props.handleSearchChange}
      onKeyPress={props.handleSearchSubmit}
    />
  </SearchFieldWrapper>
);

SearchReviews.propTypes = {
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
  currentSearch: PropTypes.string,
};

SearchReviews.defaultProps = {
  handleSearchChange: () => {},
  handleSearchSubmit: () => {},
  currentSearch: '',
};

export default SearchReviews;
