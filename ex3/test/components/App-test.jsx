import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import assert from 'assert';
import App from '../../src/components/App';

describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = { dispatch: () => {}, users: [] };
      const wrapper = shallow(<App {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
