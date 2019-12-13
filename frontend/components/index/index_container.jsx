import React from 'react';
import Index from './index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProp = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(Index)