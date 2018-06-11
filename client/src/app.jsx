import React from 'react';
import axios from 'axios';

import { filterReviews } from './helpers/apphelpers';

import ContainerAverageStars from './components/ContainerAverageStars';
import ContainerReviews from './components/ContainerReviews';

import {
  AppOuterWrapper,
  AppInnerWrapper,
} from './App.styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    // API calls
    this.getListingAverageStars = this.getListingAverageStars.bind(this);
    this.getListingReviews = this.getListingReviews.bind(this);

    // Methods
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.state = {
      averageStarsObj: {},
      allReviews: [],
      renderedReviews: [],
      currentSearch: '',
    };
  }

  componentDidMount() {
    // Using parameter 14 for now, just for testing
    this.getListingReviews(14);
    this.getListingAverageStars(14);
  }

  getListingAverageStars(id) {
    axios.get(`/api/listings/${id}/averagestars`)
      .then((response) => {
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
        const { data } = response;
        this.setState({
          allReviews: data,
          renderedReviews: data,
        });
      })
      .catch((error) => {
        // Not finished! Will properly error handle in the future.

        // console.log(error);
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
        <AppInnerWrapper>
          <ContainerAverageStars
            averageStarsObj={this.state.averageStarsObj}
            currentSearch={this.state.currentSearch}
            handleSearchChange={this.handleSearchChange}
            handleSearchSubmit={this.handleSearchSubmit}
          />
          <ContainerReviews reviews={this.state.renderedReviews} />
        </AppInnerWrapper>
      </AppOuterWrapper>
    );
  }
}

export default App;
