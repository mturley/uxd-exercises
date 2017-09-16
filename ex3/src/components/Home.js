import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import UsersTable from './UsersTable';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <AppBar title="Users" showMenuIconButton={false} />
        <UsersTable />
      </div>
    );
  }
}
