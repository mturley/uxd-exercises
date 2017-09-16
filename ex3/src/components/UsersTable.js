import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class UsersTable extends Component {
  render() {
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
