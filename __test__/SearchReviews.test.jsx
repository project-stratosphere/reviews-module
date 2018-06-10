import React from 'react';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import SearchReviews from '../client/src/components/SearchReviews';

configure({ adapter: new Adapter() });

const dummyCurrentSearch = 'Diablo II';

describe('SearchReviews', () => {
  it('should render correctly', () => {
    const output = shallow(<SearchReviews currentSearch={dummyCurrentSearch} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
