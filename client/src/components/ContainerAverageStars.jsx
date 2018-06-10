import React from 'react';
import PropTypes from 'prop-types';

import SubcontainerAverageStarsHeader from './SubcontainerAverageStarsHeader';
import ReviewStarsByDescriptor from './ReviewStarsByDescriptor';

import { BasicWrapperFlexColumnDiv } from './styles/MasterStyles.styles';
import { WrapperAvgStars } from './styles/ContainerAverageStars.styles';

const ContainerAverageStars = props => (
  <BasicWrapperFlexColumnDiv>
    <WrapperAvgStars>
      <SubcontainerAverageStarsHeader
        overallAvg={props.averageStarsObj.overallAvg}
        numReviews={props.averageStarsObj.numReviews}
        handleSearchChange={props.handleSearchChange}
        handleSearchSubmit={props.handleSearchSubmit}
      />
    </WrapperAvgStars>
    <ReviewStarsByDescriptor
      accuracyAvg={props.averageStarsObj.accuracyAvg}
      communicationAvg={props.averageStarsObj.communicationAvg}
      cleanlinessAvg={props.averageStarsObj.cleanlinessAvg}
      locationAvg={props.averageStarsObj.locationAvg}
      checkinAvg={props.averageStarsObj.checkinAvg}
      valueAvg={props.averageStarsObj.valueAvg}
    />
  </BasicWrapperFlexColumnDiv>
);

ContainerAverageStars.propTypes = {
  averageStarsObj: PropTypes.shape({
    overallAvg: PropTypes.number,
    accuracyAvg: PropTypes.number,
    communicationAvg: PropTypes.number,
    cleanlinessAvg: PropTypes.number,
    locationAvg: PropTypes.number,
    checkinAvg: PropTypes.number,
    valueAvg: PropTypes.number,
    numReviews: PropTypes.number,
  }),
  handleSearchChange: PropTypes.func,
  handleSearchSubmit: PropTypes.func,
};

ContainerAverageStars.defaultProps = {
  averageStarsObj: {
    overallAvg: 1,
    accuracyAvg: 1,
    communicationAvg: 1,
    cleanlinessAvg: 1,
    locationAvg: 1,
    checkinAvg: 1,
    valueAvg: 1,
    numReviews: 1,
  },
  handleSearchChange: () => {},
  handleSearchSubmit: () => {},
};

export default ContainerAverageStars;
