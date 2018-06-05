import React, { Component } from 'react';
import './app.css';

import ContainerAverageStars from './components/ContainerAverageStars.jsx';
import ContainerReviews from './components/ContainerReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      example: 'example',
    };
  }
  render() {
    return (
      <div className="app">
        <h1> Top of App </h1>
        <ContainerAverageStars />
        <h1> Break! </h1>
        <ContainerReviews />
        <h1> End Module </h1>
      </div>
    );
  }
}

export default App;
