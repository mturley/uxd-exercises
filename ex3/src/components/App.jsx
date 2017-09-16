import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../stylesheets/main.scss';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className="container">
      {children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default App;
