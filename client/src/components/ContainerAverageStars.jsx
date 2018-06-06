import React from 'react';

import TotalReviews from './TotalReviews';
import SearchReviews from './SearchReviews';
import ReviewsByDescriptor from './ReviewsByDescriptor';

const ContainerAverageStars = props => (
  <div>
    <h3> Average Stars Container </h3>
    <TotalReviews />
    <SearchReviews />
    <ReviewsByDescriptor />
  </div>
);

export default ContainerAverageStars;
