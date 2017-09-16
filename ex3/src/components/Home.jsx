import React from 'react';
import AppBar from 'material-ui/AppBar';
import UsersTable from './UsersTable';

const Home = () => (
  <div className="page-home">
    <AppBar title="Users" showMenuIconButton={false} />
    <UsersTable />
  </div>
);

export default Home;
