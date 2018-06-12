import React from 'react';
import { configure, shallow, mount } from 'enzyme';
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

// Notes to self after experimenting with tests of this component:
  /*
    - No point testing if there are default props.  Covered by PropTypes library.
    - No point testing default prop values.  Covered by PropTypes library.
    - No point testing whether handleSearchChange executes on change.
      --That would be testing React.
      --If you say get rid of that prop altogether, the snapshot catches it.
      --Same goes for handleSearchSubmit.
    - No point testing whether handleSearchChange is functioning correctly.
      --You can't, because this is unit testing, and that function is passed down.
      --Same goes for handleSearchSubmit.
    - No point testing styling.
      --That would be caught by the snapshot test.
    - There's actually no point passing in dummy data.  Covered by PropTypes library.
      --You're not going to go back and delete it all though.  (Maybe later!)
  */
