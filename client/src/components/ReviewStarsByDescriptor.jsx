import React from 'react';
import PropTypes from 'prop-types';

import StarsByDescriptor from './StarsByDescriptor';

import {
  ReviewStarsDescriptorWrapper,
  ReviewStarsDescriptorColumnWrapper,
  ReviewStarsDescriptorItemWrapper,
  ReviewStarsDescriptorTextWrapper,
} from './styles/ReviewStarsByDescriptor.styles';

const ReviewStarsByDescriptor = props => (
  <ReviewStarsDescriptorWrapper>
    <ReviewStarsDescriptorColumnWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Accuracy </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.accuracyAvg} />
      </ReviewStarsDescriptorItemWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Communication </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.communicationAvg} />
      </ReviewStarsDescriptorItemWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Cleanliness </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.cleanlinessAvg} />
      </ReviewStarsDescriptorItemWrapper>
    </ReviewStarsDescriptorColumnWrapper>
    <ReviewStarsDescriptorColumnWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Location </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.locationAvg} />
      </ReviewStarsDescriptorItemWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Check-in </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.checkinAvg} />
      </ReviewStarsDescriptorItemWrapper>
      <ReviewStarsDescriptorItemWrapper>
        <ReviewStarsDescriptorTextWrapper> Value </ReviewStarsDescriptorTextWrapper>
        <StarsByDescriptor avg={props.valueAvg} />
      </ReviewStarsDescriptorItemWrapper>
    </ReviewStarsDescriptorColumnWrapper>
  </ReviewStarsDescriptorWrapper>
);

ReviewStarsByDescriptor.propTypes = {
  accuracyAvg: PropTypes.number,
  communicationAvg: PropTypes.number,
  cleanlinessAvg: PropTypes.number,
  locationAvg: PropTypes.number,
  checkinAvg: PropTypes.number,
  valueAvg: PropTypes.number,
};

ReviewStarsByDescriptor.defaultProps = {
  accuracyAvg: 1,
  communicationAvg: 1,
  cleanlinessAvg: 1,
  locationAvg: 1,
  checkinAvg: 1,
  valueAvg: 1,
};

export default ReviewStarsByDescriptor;