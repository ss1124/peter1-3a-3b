import React from 'react';
import { connect } from 'react-redux';
import { updateMeeting, fetchMeeting } from '../../actions/meeting_actions';
import MeetingConfirm from './meeting_confirm';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        meetings: state.entities.meetings,
        meetingId: ownProps.match.params.meetingId,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
        fetchMeeting: (id) => dispatch(fetchMeeting(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingConfirm);