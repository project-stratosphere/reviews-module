import React from 'react';
import PropTypes from 'prop-types';

const ReviewStarsByDescriptor = props => (
  <div>
    <h6> Accuracy </h6>
    <h6> Communication </h6>
    <h6> Cleanliness </h6>
    <h6> Location </h6>
    <h6> Check-in </h6>
    <h6> Value </h6>
  </div>
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