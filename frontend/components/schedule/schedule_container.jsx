import React from 'react';
import { connect } from 'react-redux';
import { updateMeeting, fetchMeetings, showSlotsOfDoctor } from '../../actions/meeting_actions';
import Schedule from './schedule';


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        meetings: state.entities.meetings,
        time_zone: state.entities.meetings.time_zone,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
        fetchMeetings: (time_zone) => dispatch(fetchMeetings(time_zone)),
        showSlotsOfDoctor: (id, time_zone) => dispatch(showSlotsOfDoctor(id, time_zone)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);