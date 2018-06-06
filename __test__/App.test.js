import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/src/App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

