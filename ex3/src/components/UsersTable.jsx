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
import { loadUsers } from '../actions/users';

export class UsersTable extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadUsers());
  }

  render() {
    const { users } = this.props;

    console.log('users data: ', users);

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
          <TableRow>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>jsmith</TableRowColumn>
            <TableRowColumn>jsmith@yahoo.com</TableRowColumn>
            <TableRowColumn>1 Main St, Springfield, MA 12345</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>rwhite</TableRowColumn>
            <TableRowColumn>rwhite@yahoo.com</TableRowColumn>
            <TableRowColumn>1 Main St, Springfield, MA 12345</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>ssanders</TableRowColumn>
            <TableRowColumn>ssanders@yahoo.com</TableRowColumn>
            <TableRowColumn>1 Main St, Springfield, MA 12345</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>sbrown</TableRowColumn>
            <TableRowColumn>sbrown@yahoo.com</TableRowColumn>
            <TableRowColumn>1 Main St, Springfield, MA 12345</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Christopher Nolan</TableRowColumn>
            <TableRowColumn>cnolan</TableRowColumn>
            <TableRowColumn>cnolan@yahoo.com</TableRowColumn>
            <TableRowColumn>1 Main St, Springfield, MA 12345</TableRowColumn>
          </TableRow>
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