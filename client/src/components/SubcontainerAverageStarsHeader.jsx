import React from 'react';
import PropTypes from 'prop-types';

import TotalReviews from './TotalReviews';
import SearchReviews from './SearchReviews';

import { SubContainerAverageStarsHeaderWrapper } from './styles/SubcontainerAverageStarsHeader.styles';

const SubcontainerAverageStarsHeader = props => (
  <SubContainerAverageStarsHeaderWrapper>
    <TotalReviews
      overallAvg={props.overallAvg}
      numReviews={props.numReviews}
    />
    <SearchReviews handleSearchChange={props.handleSearchChange} />
  </SubContainerAverageStarsHeaderWrapper>
);

SubcontainerAverageStarsHeader.propTypes = {
  overallAvg: PropTypes.number,
  numReviews: PropTypes.number,
  handleSearchChange: PropTypes.func,
};

SubcontainerAverageStarsHeader.defaultProps = {
  overallAvg: 1,
  numReviews: 1,
  handleSearchChange: () => {},
};

export default SubcontainerAverageStarsHeader;
