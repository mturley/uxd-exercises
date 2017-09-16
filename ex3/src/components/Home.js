import React from 'react';
import AppBar from 'material-ui/AppBar';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <AppBar title="Users" />
      </div>
    );
  }
}
