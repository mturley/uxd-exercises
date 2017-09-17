import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import userShape from '../shapes/user';
import { loadUsers } from '../actions/users';
import { formatAddress } from '../helpers';


export class UsersTable extends Component {
  constructor() {
    super();
    this.onRowSelection = this.onRowSelection.bind(this);
  }

  componentDidMount() {
    const { users, dispatch } = this.props;
    if (!users.loaded) {
      dispatch(loadUsers());
    }
  }

  onRowSelection(selection) {
    const { users, dispatch } = this.props;
    const selectedIndex = selection[0];
    const selectedUser = !users.loaded ? null : users.data[selectedIndex];
    dispatch(push(`/user/${selectedUser.id}`));
  }

  render() {
    const { users } = this.props;

    if (!users.loaded) {
      return <h1>Loading...</h1>;
    }

    return (
      <Table onRowSelection={this.onRowSelection}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>E-mail</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover>
          {users.data.map(user => (
            <TableRow key={user.id} className="user-row">
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
    data: PropTypes.arrayOf(userShape),
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
};

const select = state => ({
  users: state.users,
});

export default connect(select)(UsersTable);
