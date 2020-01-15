import React from 'react';
import MeetingIndex from './meeting_index';
import { connect } from 'react-redux';

const mapStateToProp = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(MeetingIndex)