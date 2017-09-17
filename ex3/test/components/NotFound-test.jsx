import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import NotFound from '../../src/components/NotFound';

describe('NotFound component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<NotFound />);
      assert.equal(wrapper.length, 1);
    });
  });
});
