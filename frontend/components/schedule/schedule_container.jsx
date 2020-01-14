import React from 'react';
import { connect } from 'react-redux';
import { updateMeeting, fetchMeetings, showSlotsOfDoctor } from '../../actions/meeting_actions';
import Schedule from './schedule';


const mapStateToProps = (state, ownProps) => {
    return ({
        meetings: state.entities.meetings,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateMeeting: (meeting) => dispatch(updateMeeting(meeting)),
        fetchMeetings: () => dispatch(fetchMeetings()),
        showSlotsOfDoctor: (id) => dispatch(showSlotsOfDoctor(id)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);