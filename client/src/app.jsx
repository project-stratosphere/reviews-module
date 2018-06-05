import React, { Component } from 'react';
import './app.css';

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
        <h1> App is here! </h1>
      </div>
    );
  }
}

export default App;
