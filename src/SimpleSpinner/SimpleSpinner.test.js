import React from 'react';
import { cleanup, render } from '@testing-library/react';

import SimpleSpinner from './SimpleSpinner';

describe('SimpleSpinner component', () => {
  let wrapper;
  let container;

  describe('with props', () => {
    beforeAll(() => {
      wrapper = render(<SimpleSpinner size={20} mainColor="#000000" altColor="red" />);
      ({ container } = wrapper);
    });
    afterAll(cleanup);

    it('renders correctly', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
