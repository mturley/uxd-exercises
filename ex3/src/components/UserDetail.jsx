import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
import { loadUsers } from '../actions/users';
import userShape from '../shapes/user';

export class UserDetail extends Component {
  constructor() {
    super();
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
  }

  componentDidMount() {
    const { users, dispatch } = this.props;
    if (!users.loaded) {
      dispatch(loadUsers());
    }
  }

  onBackButtonClick() {
    this.props.dispatch(push('/'));
  }

  render() {
    const { users, routeParams: { id } } = this.props;

    if (!users.loaded) {
      return <h1>Loading...</h1>;
    }

    const user = users.data.find(u => `${u.id}` === id);

    return (
      <div>
        <AppBar
          title={user.name}
          iconElementLeft={<IconButton><ArrowBack /></IconButton>}
          onLeftIconButtonTouchTap={this.onBackButtonClick}
        />
        <Paper className="user-detail">
          <h3>Contact Info</h3>
          <table>
            <tbody>
              <tr>
                <td className="field">User Id:</td>
                <td className="value">{user.id}</td>
              </tr>
              <tr>
                <td className="field">Name:</td>
                <td className="value">{user.name}</td>
              </tr>
              <tr>
                <td className="field">Username:</td>
                <td className="value">{user.username}</td>
              </tr>
              <tr>
                <td className="field">E-mail:</td>
                <td className="value">{user.email}</td>
              </tr>
              <tr>
                <td className="field">Phone:</td>
                <td className="value">{user.phone}</td>
              </tr>
              <tr>
                <td className="field">Website:</td>
                <td className="value">{user.website}</td>
              </tr>
            </tbody>
          </table>
          <h3>Address</h3>
          <table>
            <tbody>
              <tr>
                <td className="field">Street:</td>
                <td className="value">{user.address.street}</td>
              </tr>
              <tr>
                <td className="field">Suite:</td>
                <td className="value">{user.address.suite}</td>
              </tr>
              <tr>
                <td className="field">City:</td>
                <td className="value">{user.address.city}</td>
              </tr>
              <tr>
                <td className="field">Zip Code:</td>
                <td className="value">{user.address.zipcode}</td>
              </tr>
              <tr>
                <td className="field">Latitude:</td>
                <td className="value">{user.address.geo.lat}</td>
              </tr>
              <tr>
                <td className="field">Longitude:</td>
                <td className="value">{user.address.geo.lng}</td>
              </tr>
            </tbody>
          </table>
          <h3>Company Info</h3>
          <table>
            <tbody>
              <tr>
                <td className="field">Company Name:</td>
                <td className="value">{user.company.name}</td>
              </tr>
              <tr>
                <td className="field">Catch Phrase:</td>
                <td className="value">{user.company.catchPhrase}</td>
              </tr>
              <tr>
                <td className="field">Mumbo-jumbo:</td>
                <td className="value">{user.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </div>
    );
  }
}

UserDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
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
