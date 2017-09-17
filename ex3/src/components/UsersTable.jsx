import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import { loadUsers } from '../actions/users';

const formatAddress = address =>
  `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`;

export class UsersTable extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadUsers());
  }

  render() {
    const { users } = this.props;

    if (!users.loaded) {
      return <Subheader>Loading...</Subheader>;
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>E-mail</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.data.map(user => (
            <TableRow key={user.id}>
              <TableRowColumn>{user.name}</TableRowColumn>
              <TableRowColumn>{user.username}</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
              <TableRowColumn>{formatAddress(user.address)}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

UsersTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
};

const select = state => ({
  users: state.users,
});

export default connect(select)(UsersTable);
