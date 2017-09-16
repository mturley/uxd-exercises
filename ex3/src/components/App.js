import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../stylesheets/main.scss';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
