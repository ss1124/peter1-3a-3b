import React from 'react';
import { connect } from 'react-redux';
import { createMeeting } from '../../actions/meeting_actions';
import Schedule from './schedule';


const mapStateToProps = (state, ownProps) => {
    return ({

    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createMeeting: (meeting) => dispatch(createMeeting(meeting))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);