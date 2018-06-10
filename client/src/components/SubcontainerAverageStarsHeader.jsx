import React from 'react';
import PropTypes from 'prop-types';

import TotalReviews from './TotalReviews';
import SearchReviews from './SearchReviews';

import { Wrapper } from './styles/SubcontainerAverageStarsHeader.styles';

const SubcontainerAverageStarsHeader = props => (
  <Wrapper>
    <TotalReviews
      overallAvg={props.overallAvg}
      numReviews={props.numReviews}
    />
    <SearchReviews />
  </Wrapper>
);

SubcontainerAverageStarsHeader.propTypes = {
  overallAvg: PropTypes.number,
  numReviews: PropTypes.number,
};

SubcontainerAverageStarsHeader.defaultProps = {
  overallAvg: 1,
  numReviews: 1,
};

export default SubcontainerAverageStarsHeader;
