import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import { UsersTable } from '../../src/components/UsersTable';

const mockAddress = {
  street: 'Main St',
  suite: '# 123',
  city: 'Springfield',
  zipcode: '12345',
};

const mockEmptyUsers = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
};

const mockLoadedUsers = {
  data: [
    {
      id: 3,
      name: 'Carl Carlson',
      username: 'cman',
      email: 'carl@gmail.com',
      address: { ...mockAddress },
    }, {
      id: 2,
      name: 'Bob Boberson',
      username: 'bobber',
      email: 'bob@gmail.com',
      address: { ...mockAddress },
    }, {
      id: 1,
      name: 'Aaron Aaronson',
      username: 'a.a.ron',
      email: 'aaron@gmail.com',
      address: { ...mockAddress },
    },
  ],
  loading: false,
  loaded: true,
  error: null,
};

describe('UsersTable component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <UsersTable
          dispatch={() => {}}
          users={mockLoadedUsers}
        />,
      );
      assert.equal(wrapper.length, 1);
    });
  });

  describe('componentDidMount()', () => {
    it('should call dispatch if users are NOT already loaded', () => {
      fetchMock.get('*', {}); // Respond to any fetch() requests with an empty JSON object
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UsersTable
          dispatch={mockDispatch}
          users={mockEmptyUsers}
        />,
      );
      wrapper.instance().componentDidMount();
      assert.equal(mockDispatch.callCount, 1);
    });

    it('should NOT call dispatch if users are already loaded', () => {
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UsersTable
          dispatch={mockDispatch}
          users={mockLoadedUsers}
        />,
      );
      wrapper.instance().componentDidMount();
      assert.equal(mockDispatch.callCount, 0);
    });
  });

  describe('onRowSelection()', () => {
    it('dispatches a redirect to the correct route for the selected user', () => {
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UsersTable
          dispatch={mockDispatch}
          users={mockLoadedUsers}
        />,
      );
      wrapper.instance().onRowSelection([1]);
      const routerAction = mockDispatch.firstCall.args[0];
      assert.equal(routerAction.payload.args[0], '/user/2');
    });

    it('does nothing if somehow called before users are loaded', () => {
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UsersTable
          dispatch={mockDispatch}
          users={mockEmptyUsers}
        />,
      );
      wrapper.instance().onRowSelection([1]);
      assert.equal(mockDispatch.callCount, 0);
    });
  });
});
