import React from 'react';
import DocAvailabilityForm from './doc_availability_form';
import { connect } from 'react-redux';
import { createMeeting } from '../../actions/meeting_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
  })
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return ({
    logout: () => dispatch(logout()),
    createMeeting: (meeting) => dispatch(createMeeting(meeting))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DocAvailabilityForm)