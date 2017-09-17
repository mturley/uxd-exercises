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

const byLastNameDesc = (userA, userB) => {
  // Comparator for sorting users by name, descending
  // Tries to use the last name if possible by looking after the space
  const splitA = userA.name.split(' ');
  const splitB = userB.name.split(' ');
  const compareA = splitA.length === 2 ? splitA[1] : userA.name;
  const compareB = splitB.length === 2 ? splitB[1] : userB.name;
  if (compareA < compareB) return 1;
  if (compareA > compareB) return -1;
  return 0;
};

export class UsersTable extends Component {
  constructor() {
    super();
    this.onRowSelection = this.onRowSelection.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadUsers());
  }

  onRowSelection(selection) {
    const { users } = this.props;
    const selectedIndex = selection[0];
    const selectedUser = !users.loaded ? null : users.data[selectedIndex];
    console.log('selected! ', selectedUser);
  }

  render() {
    const { users } = this.props;

    if (!users.loaded) {
      return <Subheader>Loading...</Subheader>;
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
          {users.data.sort(byLastNameDesc).map(user => (
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
