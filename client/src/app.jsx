import React from 'react';
import axios from 'axios';

import { filterReviews } from './helpers/apphelpers';

import ContainerAverageStars from './components/ContainerAverageStars';
import ContainerReviews from './components/ContainerReviews';

import {
  AppOuterWrapper,
  AppInnerWrapper,
} from './App.styles';

import { BasicTextFormatSpan } from './components/styles/MasterStyles.styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getListingId = this.getListingId.bind(this);

    // API calls
    //this.getListingAverageStars = this.getListingAverageStars.bind(this);
    this.getListingAverageStarsNew = this.getListingAverageStarsNew.bind(this);
    this.getListingReviews = this.getListingReviews.bind(this);

    // Methods
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.state = {
      averageStarsObj: {},
      allReviews: [],
      renderedReviews: [],
      currentSearch: '',
      err404: false,
    };
  }

  componentDidMount() {
    const id = this.getListingId();
    this.getListingReviews(id);
    //this.getListingAverageStars(id);
  }

  getListingId() {
    return window.location.pathname.slice(7, -1);
  }

  getListingAverageStars(id) {
    axios.get(`/api/listings/${id}/averagestars`)
      .then((response) => {
        this.setState({
          averageStarsObj: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          err404: true,
        });
      });
  }

  getListingAverageStarsNew(data){
    const avgStars = {
      rAccuracy: 0,
      rComms: 0,
      rClean: 0,
      rLocation: 0,
      rCheckIn: 0,
      rValue: 0,
    };

    if(data.length > 0) {
      for (j = 0; j < data.length;j += 1) {
        // sum up all the results from the reviews
        avgStars.rAccuracy += data[j].rank_accuracy;
        avgStars.rComms += data[j].rank_communications;
        avgStars.rClean += data[j].rank_cleanliness;
        avgStars.rLocation += data[j].rank_location;
        avgStars.rCheckIn += data[j].rank_checkin;
        avgStars.rValue += data[j].rank_value;
      }
      let denominator = data.length;
      avgStars.rAccuracy = (avgStars.rAccuracy/denominator).toFixed(2);
      avgStars.rComms = (avgStars.rComms/denominator).toFixed(2);
      avgStars.rClean = (avgStars.rClean/denominator).toFixed(2);
      avgStars.rLocation = (avgStars.rLocation/denominator).toFixed(2);
      avgStars.rCheckIn = (avgStars.rCheckIn/denominator).toFixed(2);
      avgStars.rValue = (avgStars.rValue/denominator).toFixed(2);
    }
    return avgStars;
  }

  getListingReviews(id) {
    axios.get(`/api/listings/${id}/reviews`)
      .then((response) => {
        const { data } = response;
        const avgStars = getListingAverageStarsNew(data)
        this.setState({
          allReviews: data,
          renderedReviews: data,
        });
      })
      .catch((error) => {
        this.setState({
          err404: true,
        });
      });
  }

  handleSearchChange(event) {
    this.setState({
      currentSearch: event.target.value,
    });
  }

  handleSearchSubmit(event) {
    if (event.key === 'Enter') {
      if (this.state.currentSearch) {
        const filteredReviews = filterReviews(this.state.currentSearch, this.state.allReviews);
        this.setState({
          renderedReviews: filteredReviews,
        });
      } else {
        this.setState({
          renderedReviews: this.state.allReviews,
        });
      }
    }
  }

  render() {
    return (
      <AppOuterWrapper>
        {this.state.err404 ?
          (
            <BasicTextFormatSpan>
              <h1> Sorry, that listing does not exist </h1>
            </BasicTextFormatSpan>
          ) : (
            <AppInnerWrapper>
              <ContainerAverageStars
                averageStarsObj={this.state.averageStarsObj}
                currentSearch={this.state.currentSearch}
                handleSearchChange={this.handleSearchChange}
                handleSearchSubmit={this.handleSearchSubmit}
              />
              <ContainerReviews reviews={this.state.renderedReviews} />
            </AppInnerWrapper>
          )
        }
      </AppOuterWrapper>
    );
  }
}

export default App;