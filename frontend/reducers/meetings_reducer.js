import { RECEIVE_MEETING, RECEIVE_ALL_MEETINGS } from '../actions/meeting_actions';
//import moment from 'moment-timezone';
var moment = require('moment-timezone');


const meetingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEETING:
            debugger
            return Object.assign({}, state, { [action.meeting.id]: action.meeting});
        case RECEIVE_ALL_MEETINGS:
            debugger
            let newState = Object.assign({}, state, action.meetings)
            debugger
            return newState
        default:
            return state;

    }
}

export default meetingsReducer;