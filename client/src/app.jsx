import React from 'react';
import axios from 'axios';

import processReviewsArray from './helpers/apphelpers';

import ContainerAverageStars from './components/ContainerAverageStars';
import ContainerReviews from './components/ContainerReviews';

import {
  OuterWrapper,
  InnerWrapper,
} from './App.styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    // API calls
    this.getListingAverageStars = this.getListingAverageStars.bind(this);
    this.getListingReviews = this.getListingReviews.bind(this);

    this.state = {
      averageStarsObj: {},
      reviews: [],
    };
  }

  componentDidMount() {
    // Using parameter 1 for now, just for testing
    this.getListingReviews(14);
    this.getListingAverageStars(14);
  }

  getListingAverageStars(id) {
    axios.get(`/api/listings/${id}/averagestars`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          averageStarsObj: response.data,
        });
      })
      .catch((error) => {
        // Not finished! Will properly error handle in the future.

        // console.log(error);
      });
  }

  getListingReviews(id) {
    axios.get(`/api/listings/${id}/reviews`)
      .then((response) => {
        // console.log(response.data);
        const data = processReviewsArray(response.data);
        this.setState({
          reviews: data,
        });
      })
      .catch((error) => {
        // Not finished! Will properly error handle in the future.

        // console.log(error);
      });
  }

  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <ContainerAverageStars averageStarsObj={this.state.averageStarsObj} />
          <ContainerReviews reviews={this.state.reviews} />
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}

export default App;
