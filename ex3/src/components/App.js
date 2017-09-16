import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../stylesheets/main.scss';

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
