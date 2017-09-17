import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import { UserDetail } from '../../src/components/UserDetail';

const mockUserFields = {
  address: {
    street: 'Main St',
    suite: '# 123',
    city: 'Springfield',
    zipcode: '12345',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '123-456-7890',
  website: 'bing.com',
  company: {
    name: 'ACME',
    catchPhrase: '',
    bs: '',
  },
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
      ...mockUserFields,
    }, {
      id: 2,
      name: 'Bob Boberson',
      username: 'bobber',
      email: 'bob@gmail.com',
      ...mockUserFields,
    }, {
      id: 1,
      name: 'Aaron Aaronson',
      username: 'a.a.ron',
      email: 'aaron@gmail.com',
      ...mockUserFields,
    },
  ],
  loading: false,
  loaded: true,
  error: null,
};

describe('UserDetail component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <UserDetail
          dispatch={() => {}}
          routeParams={{ id: '1' }}
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
        <UserDetail
          dispatch={mockDispatch}
          routeParams={{ id: '1' }}
          users={mockEmptyUsers}
        />,
      );
      wrapper.instance().componentDidMount();
      assert.equal(mockDispatch.callCount, 1);
    });

    it('should NOT call dispatch if users are already loaded', () => {
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UserDetail
          dispatch={mockDispatch}
          routeParams={{ id: '1' }}
          users={mockLoadedUsers}
        />,
      );
      wrapper.instance().componentDidMount();
      assert.equal(mockDispatch.callCount, 0);
    });
  });

  describe('onBackButtonClick()', () => {
    it('should redirect back to the home page', () => {
      const mockDispatch = sinon.spy();
      const wrapper = shallow(
        <UserDetail
          dispatch={mockDispatch}
          routeParams={{ id: '1' }}
          users={mockLoadedUsers}
        />,
      );
      wrapper.instance().onBackButtonClick();
      const routerAction = mockDispatch.firstCall.args[0];
      assert.equal(routerAction.payload.args[0], '/');
    });
  });

  describe('getSelectedUser()', () => {
    it('should find the matching user object by id', () => {
      const wrapper = shallow(
        <UserDetail
          dispatch={() => {}}
          routeParams={{ id: '1' }}
          users={mockLoadedUsers}
        />,
      );
      const user = wrapper.instance().getSelectedUser();
      assert.deepEqual(user, mockLoadedUsers.data[2]);
    });

    it('should return undefined if there is no matching user', () => {
      const wrapper = shallow(
        <UserDetail
          dispatch={() => {}}
          routeParams={{ id: '5' }}
          users={mockLoadedUsers}
        />,
      );
      const user = wrapper.instance().getSelectedUser();
      assert.equal(user, undefined);
    });
  });
});
