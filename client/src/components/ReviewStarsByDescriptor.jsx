import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import {
  Wrapper,
  ColumnWrapper,
  DescriptorWrapper,
  DescriptorText,
} from './styles/ReviewStarsByDescriptor.styles';

const ReviewStarsByDescriptor = props => (
  <Wrapper>
    <ColumnWrapper>
      <div>
        <DescriptorText> Accuracy {props.accuracyAvg} </DescriptorText>
      </div>
      <div>
        <DescriptorText> Communication {props.communicationAvg} </DescriptorText>
      </div>
      <div>
        <DescriptorText> Cleanliness {props.cleanlinessAvg} </DescriptorText>
      </div>
    </ColumnWrapper>
    <ColumnWrapper>
      <DescriptorWrapper>
        <DescriptorText> Location {props.locationAvg} </DescriptorText>
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Check-in {props.checkinAvg} </DescriptorText>
      </DescriptorWrapper>
      <DescriptorWrapper>
        <DescriptorText> Value {props.valueAvg} </DescriptorText>
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