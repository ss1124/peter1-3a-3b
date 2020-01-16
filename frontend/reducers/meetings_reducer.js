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
            let meetings = action.meetings;
            meetings.available_date = {};
            debugger
            Object.keys(meetings).forEach(function(key,index) {
                let zone = "America/Los_Angeles";
                let begin_time = meetings[key].begin_time;
                let _moment = moment.tz(begin_time, zone);

                meetings[key].formatted = _moment.format("MMMM Do YYYY, h:mm:ss a");
                meetings[key].date = _moment.date();
                meetings[key].hour = _moment.hour();
                meetings[key].minute = _moment.minute();
                meetings[key].month = _moment.month(); //january is represented as 0
                meetings[key].year = _moment.year();
                debugger
                let year_month_date = meetings[key].year + '-' + meetings[key].month + '-' + meetings[key].date;
                meetings.available_date[year_month_date] = true;
            });
            debugger
            let newState = Object.assign({}, state, meetings)
            debugger
            return newState
        default:
            return state;

    }
}

export default meetingsReducer;