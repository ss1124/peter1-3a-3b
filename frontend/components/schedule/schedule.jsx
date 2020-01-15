import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Calendar from 'react-calendar';

var moment = require('moment');

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            curr_time: null,
            date: null,
            // meetings: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getTime = this.getTime.bind(this);
        this.handleMeetingButton = this.handleMeetingButton.bind(this);
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         // curr_time : hour + ":" + minute + " " + AM_or_PM
        //         curr_time: this.getTime()
        //     })
        // },1000)
        debugger
        this.props.showSlotsOfDoctor(1)
        //  .then((data) => {
        //     debugger
        //     this.setState({meetings: data})
        // });
    }

    getTime() {
        let _moment = moment();
        let hour = _moment.hour();
        let minute = _moment.minutes();
        let AM_or_PM = undefined;
        if (hour >= 12) {
            AM_or_PM = "PM";
        } else {
            AM_or_PM = "AM";
        }
        hour = hour % 12;
        return hour + ":" + minute + " " + AM_or_PM;
    }

    onChange(date) {
        this.setState({ date })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMeeting(this.state);
    }
    //<div>Date Chosen: {this.state.date.getUTCDay()} </div>

    handleMeetingButton(e) {
        // e.preventDefault();
        // debugger
        // let currentUserId = this.props.currentUser.id;
        // debugger
        // let meetingId = e.target.value;
        // debugger
        // let updatedMeeting = Object.assign(this.props.meetings[meetingId], {patient_id: currentUserId});
        // debugger
        // this.props.updateMeeting(updatedMeeting)
        let meetingId = e.target.value;
        this.props.history.push(`/meeting_confirm/${meetingId}`);
    }

    render() {
        // momentObject.toString()
        // momentObject.format()
        // momentObject.toISOString()
        debugger
        let meetings = this.props.meetings
        Object.keys(meetings).forEach(function(key,index) {
                let zone = "America/Los_Angeles";
                let begin_time = meetings[key].begin_time;
                let _moment = moment.tz(begin_time, zone);
                meetings[key].formatted = _moment.format("MMMM Do YYYY, h:mm:ss a");
                meetings[key].date = _moment.date();
                meetings[key].hour = _moment.hour();
                meetings[key].minute = _moment.minute();
        });
        debugger
        let meetings_array = Object.values(meetings);
        debugger
        return (
            <>
                <div>Times shown in America/New_York clock. Current time is {this.state.curr_time}</div>
                
                <Calendar 
                    onClickDay={this.onChange}
                    value={this.state.date}
                />
                <div className="available-times-tables">
                    <ul>
                    {meetings_array.slice(0).map((meeting, key) => {
                    return <div key={key}>
                                <button value={meeting.id} onClick={this.handleMeetingButton}>{meeting.formatted}</button>
                            </div> 
                    })}
                    </ul>
                </div>
            </>
        )
    }
}


export default Schedule;





    



            // <form id="schedule-form" onSubmit={this.handleSubmit}>
            //     <input type="text" placeholder="begin_time" value={this.state.begin_time}
            //         onChange={this.update("begin_time")} required/>
            //     <br/>
            //     <input type="text" placeholder="end_time" value={this.state.end_time}
            //         onChange={this.update("end_time")} required/>
            //     <br/>
            //     <input type="text" placeholder="user_id" value={this.state.user_id}
            //         onChange={this.update("user_id")} required/>
            //     <br/>
            //     <button>Create Meeting</button>
            // </form>