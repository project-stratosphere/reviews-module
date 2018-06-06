import React from 'react';
import axios from 'axios';
// import './app.css';

import ContainerAverageStars from './components/ContainerAverageStars.jsx';
import ContainerReviews from './components/ContainerReviews.jsx';

const placeholderAverageStarsObj = {
  overallAvg: 2.83,
  accuracyAvg: 1.71,
  communicationAvg: 2.57,
  cleanlinessAvg: 2.29,
  locationAvg: 3.36,
  checkinAvg: 3.93,
  valueAvg: 3.14,
  numReviews: 14,
};

const placeholderReviewsArray = [{
  review_date: '2016-11-04',
  review_text: 'Laborum eius id rerum et in ratione.',
  first_name: 'Torey',
  last_name: 'Larson',
}];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getListingAverageStars = this.getListingAverageStars.bind(this);
    this.getListingReviews = this.getListingReviews.bind(this);

    // Just for testing
    this.logState = this.logState.bind(this);

    this.state = {
      averageStarsObj: placeholderAverageStarsObj,
      reviews: placeholderReviewsArray,
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
        this.setState({
          reviews: response.data,
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
        <ContainerAverageStars />
        <h1> Break! </h1>
        <ContainerReviews />
        <h1> End Module </h1>
      </div>
    )
  }
}

export default App;
