import React from 'react';

import TotalReviews from './TotalReviews';
import SearchReviews from './SearchReviews';
import ReviewStarsByDescriptor from './ReviewStarsByDescriptor';

const ContainerAverageStars = props => (
  <div>
    <h3> Average Stars Container </h3>
    <TotalReviews />
    <SearchReviews />
    <ReviewStarsByDescriptor />
  </div>
);

export default ContainerAverageStars;
