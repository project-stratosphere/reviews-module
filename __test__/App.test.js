// Note - refer to SearchReviews.test.jsx for more learnings on what to test/not test

import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/src/App';
import ContainerAverageStars from '../client/src/components/ContainerAverageStars';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should have state for Average Stars', () => {
    const output = shallow(<App />);
    expect(output.state().averageStarsObj).toBeDefined();
  });
  it('should have state for All Reviews', () => {
    const output = shallow(<App />);
    expect(output.state().allReviews).toBeDefined();
  });
  it('should have state for Rendered Reviews', () => {
    const output = shallow(<App />);
    expect(output.state().renderedReviews).toBeDefined();
  });
  it('should have state for Current Search', () => {
    const output = shallow(<App />);
    expect(output.state().currentSearch).toBeDefined();
  });
  it('should have state for Error 404', () => {
    const output = shallow(<App />);
    expect(output.state().err404).toBeDefined();
  });

  // Reference for testing App methods:
  // https://stackoverflow.com/questions/43426885/enzyme-simulate-an-onchange-event?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
});
