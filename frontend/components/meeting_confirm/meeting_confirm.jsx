import React from 'react';
import {Link, Redirect} from 'react-router-dom';
var moment = require('moment');

class MeetingConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            curr_time: null,
            date: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchMeeting(this.props.meetingId);
    }

    

    handleSubmit(e) {
        e.preventDefault();
        debugger
        let currentUserId = this.props.currentUser.id;
        debugger
        let meetingId = this.props.meetingId;
        debugger
        let updatedMeeting = Object.assign(this.props.meetings[meetingId], {patient_id: currentUserId});
        debugger
        this.props.updateMeeting(updatedMeeting).then(() => {
            this.props.history.push('/meeting_index');
        })
    }

    render() {
        if (!(this.props.meetingId in this.props.meetings)) {
            return null;
        }
        debugger
        let zone = "America/Los_Angeles";
        let key = this.props.meetingId;
        debugger
        let meetings = this.props.meetings;
        let begin_time = meetings[key].begin_time;
        let _moment = moment.tz(begin_time, zone);
        meetings[key].formatted = _moment.format("MMMM Do YYYY, h:mm:ss a");
        meetings[key].date = _moment.date();
        meetings[key].hour = _moment.hour();
        meetings[key].minute = _moment.minute();
        debugger
        return (
            <>                
                <div className="available-times-tables">
                    When: {this.props.meetings[this.props.meetingId].formatted}
                </div>
                <button onClick={this.handleSubmit}>Confirm</button>
            </>
        )
    }
}


export default MeetingConfirm;

