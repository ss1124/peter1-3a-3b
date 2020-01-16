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
            calendar_val: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getTime = this.getTime.bind(this);
        this.handleMeetingButton = this.handleMeetingButton.bind(this);
        this.handleClickMonth = this.handleClickMonth.bind(this);
    }

    handleClickMonth({ activeStartDate, view }) {
        debugger
        alert('Changed view to: ', activeStartDate, view)
        this.props.showSlotsOfDoctor(1);
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
        debugger
        this.setState({ date: date.getDate() })
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
        if (!("available_date" in this.props.meetings)) {
            return null;
        }
        let meetings = this.props.meetings;
        debugger
        let meetings_array = Object.values(meetings);
        debugger
        return (
            <div id="schedule">
                <div>Times shown in America/New_York clock. Current time is {this.state.curr_time}</div>
                
                <Calendar 
                    onClickDay={this.onChange}
                    value={this.state.calendar_val}
                    minDate={new Date()}
                    // minDetail="month"
                    prev2Label={null}
                    next2Label={null}
                    minDetail="month"
                    tileClassName={({ activeStartDate, date, view }) => {
                        // [{year: ..., month: ..., date: ...}, ...]
                        //&& this.props.meetings.available_date.includes(date.getDate()) ? "available-date" : null
                        debugger
                        let date_moment = moment(date);
                        let year_month_date = date_moment.year() + "-" + date_moment.month() + "-" + date_moment.date();
                        if (view !== 'month') {
                            return
                        }
                        if (year_month_date in this.props.meetings.available_date) {
                            return "available-date"
                        } 
                    }}
                />
                <div className="available-times-tables">
                    <ul>
                    {meetings_array.slice(0).map((meeting, key) => {
                        if (meeting.date != this.state.date) {
                            return
                        }
                        if (!meeting.patient_id) {
                            return <div key={key}>
                                    <button className="slot-unselected" value={meeting.id} onClick={this.handleMeetingButton}>{meeting.formatted}</button>
                                </div> 
                        }
                        return <div key={key}>
                                    <button className="slot-selected" value={meeting.id} onClick={this.handleMeetingButton}>{meeting.formatted}</button>
                                </div> 
                    })}
                    </ul>
                </div>
            </div>
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