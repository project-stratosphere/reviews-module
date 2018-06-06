import React from 'react';

import TotalReviews from './TotalReviews.jsx';
import SearchReviews from './SearchReviews.jsx';
import ReviewsByDescriptor from './ReviewsByDescriptor.jsx';

const ContainerAverageStars = props => (
  <div>
    <h3> Average Stars Container </h3>
    <TotalReviews />
    <SearchReviews />
    <ReviewsByDescriptor />
  </div>
);

export default ContainerAverageStars;