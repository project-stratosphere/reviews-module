import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import StarsByDescriptor from '../client/src/components/StarsByDescriptor';

configure({ adapter: new Adapter() });

const dummyAvg = 4.4;

describe('StarsByDescriptor', () => {
  it('should render correctly', () => {
    const output = shallow(<StarsByDescriptor avg={dummyAvg}/>);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
