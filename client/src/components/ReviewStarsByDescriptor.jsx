import React from 'react';
import PropTypes from 'prop-types';

import StarsByDescriptor from './StarsByDescriptor';

import {
  Wrapper,
  ColumnWrapper,
  DescriptorWrapper,
  DescriptorText,
} from './styles/ReviewStarsByDescriptor.styles';

const ReviewStarsByDescriptor = props => (
  <Wrapper>
    <ColumnWrapper>
      <DescriptorWrapper>
        <DescriptorText> Accuracy </DescriptorText>
        <StarsByDescriptor avg={props.accuracyAvg} />
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Communication </DescriptorText>
        <StarsByDescriptor avg={props.communicationAvg} />
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Cleanliness </DescriptorText>
        <StarsByDescriptor avg={props.cleanlinessAvg} />
      </DescriptorWrapper>
    </ColumnWrapper>
    <ColumnWrapper>
      <DescriptorWrapper>
        <DescriptorText> Location </DescriptorText>
        <StarsByDescriptor avg={props.locationAvg} />
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Check-in </DescriptorText>
        <StarsByDescriptor avg={props.checkinAvg} />
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Value </DescriptorText>
        <StarsByDescriptor avg={props.valueAvg} />
      </DescriptorWrapper>
    </ColumnWrapper>
  </Wrapper>
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