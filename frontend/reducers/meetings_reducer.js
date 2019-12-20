import { RECEIVE_MEETING } from '../actions/meeting_actions';

const meetingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEETING:
            debugger
            return Object.assign({}, state, { [action.meeting.id]: action.meeting});
        default:
            return state;
    }
}

export default meetingsReducer;