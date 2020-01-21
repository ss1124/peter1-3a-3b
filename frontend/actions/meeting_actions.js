import * as API_Meeting_Util from '../util/meeting_api_util';

export const RECEIVE_MEETING = 'RECEIVE_MEETING';
export const REMOVE_MEETING = 'REMOVE_MEETING';
export const RECEIVE_ALL_MEETINGS = 'RECEIVE_ALL_MEETINGS';


const receiveMeetings = (meetings) => {
  return ({
    type: RECEIVE_ALL_MEETINGS,
    meetings
  })
}

const receiveMeeting = (meeting) => {
  return ({
    type: RECEIVE_MEETING,
    meeting,
  })
}

const removeMeeting = (id) => {
  return ({
    type: REMOVE_MEETING,
    meetingId: id,
  })
}


export const fetchMeetings = (time_zone) => dispatch => {
  return API_Meeting_Util.fetchMeetings(time_zone).then(meetings => {
    return dispatch(receiveMeetings(meetings));
  })
}

export const fetchMeeting = (id) => dispatch => {
  return API_Meeting_Util.fetchMeeting(id).then(meeting => {
    return dispatch(receiveMeeting(meeting));
  })
}

export const createMeeting = (meeting) => dispatch => {
  debugger
  return API_Meeting_Util.createMeeting(meeting).then(meeting => {
    debugger
    return dispatch(receiveMeeting(meeting))
  });
}

export const updateMeeting = (meeting) => dispatch => {
  return API_Meeting_Util.updateMeeting(meeting).then(meeting => {
     return dispatch(receiveMeeting(meeting))
  })
}

export const deleteMeeting = (id) => dispatch => { 
  return API_Meeting_Util.deleteMeeting(id).then(meeting => {
    return dispatch(removeMeeting(meeting.id))
  })
}

export const showSlotsOfDoctor = (id, time_zone) => dispatch => {
  debugger
  return API_Meeting_Util.showSlotsOfDoctor(id, time_zone).then(meetings => {
    return dispatch(receiveMeetings(meetings))
  })
}

