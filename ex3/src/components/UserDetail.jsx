import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import userShape from '../shapes/user';

export class UserDetail extends Component {
  constructor() {
    super();
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
  }

  onBackButtonClick() {
    this.props.dispatch(push('/'));
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <AppBar
          title="User Detail"
          iconElementLeft={<IconButton><ArrowBack /></IconButton>}
          onLeftIconButtonTouchTap={this.onBackButtonClick}
        />
        <p>
          {JSON.stringify(users)}
        </p>
      </div>
    );
  }
}

UserDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(userShape),
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
};

UserDetail.defaultProps = {
  user: null,
};

const select = state => ({
  users: state.users,
});

export default connect(select)(UserDetail);
