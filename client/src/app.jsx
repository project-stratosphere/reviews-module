import React from 'react';
import axios from 'axios';
// import './app.css';

import appHelpers from './helpers/apphelpers';

import ContainerAverageStars from './components/ContainerAverageStars';
import ContainerReviews from './components/ContainerReviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    // API calls
    this.getListingAverageStars = this.getListingAverageStars.bind(this);
    this.getListingReviews = this.getListingReviews.bind(this);

    // Just for testing
    this.logState = this.logState.bind(this);

    this.state = {
      averageStarsObj: {},
      reviews: [],
    };
  }

  componentDidMount() {
    // Using parameter 1 for now, just for testing
    this.getListingReviews(1);
    this.getListingAverageStars(1);
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
        const data = appHelpers.processReviewsArray(response.data);
        this.setState({
          reviews: data,
        });
      })
      .catch((error) => {
        // Not finished! Will properly error handle in the future.

        // console.log(error);
      });
  }

  // Just for testing.  Can drop into a div using the following tag: onClick={this.logState}
  logState() {
    console.log(this.state.averageStarsObj);
    console.log(this.state.reviews);
  }

  render() {
    return (
      <div>
        <h1> Top of App </h1>
        <ContainerAverageStars averageStarsObj={this.state.averageStarsObj} />
        <h1> Break! </h1>
        <ContainerReviews reviews={this.state.reviews} />
        <h1> End Module </h1>
      </div>
    );
  }
}

export default App;
