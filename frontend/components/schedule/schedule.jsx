import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Calendar from 'react-calendar';
import LoginNavBar from '../login_nav_bar/login_nav_bar';
var moment = require('moment');

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            curr_time: null,
            date: null,
            calendar_val: null,
            formatted: null,
            time_zone: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getTime = this.getTime.bind(this);
        this.handleMeetingButton = this.handleMeetingButton.bind(this);
        this.handleClickMonth = this.handleClickMonth.bind(this);
        this.submitNewTimeZone = this.submitNewTimeZone.bind(this);
        this.showTimeZoneForm = this.showTimeZoneForm.bind(this);
        this.tileIsDisabled = this.tileIsDisabled.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.showSlotsOfDoctor(1, "America+Los_Angeles")
            .then(() => {this.setState({time_zone: this.props.time_zone})})
    }

    tileIsDisabled(obj) {
        let activeStartDate = obj.activeStartDate;
        let date = obj.date;
        let view = obj.view;

        let date_moment = moment(date);
        let year_month_date = date_moment.year() + "-" + date_moment.month() + "-" + date_moment.date();
        // if (view !== 'month') {
        //     debugger
        //     return false //disabled
        // }
        
        debugger
        if (moment().tz(this.props.time_zone).isAfter(date, "day")) { //if date is before now, disable the tile.
            debugger
            return true // disabled
        }
        if (!(year_month_date in this.props.meetings.available_date)) {
            debugger
            return true // disabled
        } 
        debugger
        return false // not disabled
        
    }

    showTimeZoneForm() {
        let form = document.getElementById("timezone-form");
        form.classList.toggle("hidden");
        let changeButton = document.querySelector(".change-button");
        if (changeButton.innerHTML === "Change") {
            changeButton.innerHTML = "Cancel";
        } else {
            changeButton.innerHTML = "Change";
        }
        debugger
        // form.classList.add("shown");
    }

    submitNewTimeZone(e) {
        e.preventDefault();
        this.props.showSlotsOfDoctor(1, e.target.value)
            .then(() => {this.setState({time_zone: this.props.time_zone, calendar_val: null, date: null, formatted: null})})
        
    }

    handleClickMonth({ activeStartDate, view }) {
        debugger
        alert('Changed view to: ', activeStartDate, view)
        this.props.showSlotsOfDoctor(1);
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
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let date_int = date.getDate();
        let suffix;
        if (date_int > 3 && date_int < 21) {
            suffix = "th";
        } else {
            switch (date_int % 10) {
                case 1:
                    suffix = "st";
                    break;
                case 2:
                    suffix = "nd";
                    break;
                case 3:
                    suffix = "rd";
                    break;
                default:
                    suffix = "th";
            }
        }
        debugger
        let _formatted = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date_int + suffix;
        // this.setState({ date: date.getDate(), formatted: _formatted })
        this.setState({date: date.getDate(), calendar_val: date, formatted: _formatted})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMeeting(this.state);
    }
    //<div>Date Chosen: {this.state.date.getUTCDay()} </div>

    handleMeetingButton(e) {
        let meetingId = e.target.value;
        this.props.history.push(`/meeting_confirm/${meetingId}`);
    }

    render() {
        debugger
        if (!("available_date" in this.props.meetings)) {
            return null;
        }
        let meetings = this.props.meetings;
        let meetings_array = Object.values(meetings);
        meetings_array.pop(); //remove key-value pair with key "available-date"
        meetings_array.pop(); //remove key-value pair with key "time_zone"
        return (
            <div id="schedule">
                <LoginNavBar/>
                <div className="flex-col">
                    <div className="flex-row">
                        <p>Times shown in {this.state.time_zone} clock. </p>
                        &nbsp;
                        <p onClick={this.showTimeZoneForm} className="change-button">Change</p>
                    </div>
                    <div id="timezone-form" className="hidden">
                        <p>Select Your Location:</p>
                        <button onClick={this.submitNewTimeZone} value="America+Los_Angeles">Los Angeles, CA</button>
                        <button onClick={this.submitNewTimeZone} value="America+New_York">New York, NY</button>
                        <button onClick={this.submitNewTimeZone} value="Asia+Seoul">Seoul, South Korea</button>
                        <button onClick={this.submitNewTimeZone} value="Europe+Stockholm">Stockholm, Sweden</button>
                    </div>
                </div>
                <Calendar
                    id="main-calendar" 
                    className="schedule-calendar"
                    onClickDay={this.onChange}
                    value={this.state.calendar_val}
                    // minDetail="month"
                    // minDate={new Date()}
                    prev2Label={null}
                    next2Label={null}
                    minDetail="month"
                    tileDisabled={this.tileIsDisabled}
                />
                <div className="available-times-tables">
                    <div className="today-date">
                        <div>{this.state.formatted}</div>
                    </div>
                    <ul className="slots-ul">
                        {meetings_array.slice(0).map((meeting, key) => {
                            if (meeting.date != this.state.date) {
                                return
                            }
                            if (!meeting.patient_id) {
                                return <div key={key}>
                                        <button className="slot-unselected" value={meeting.id} onClick={this.handleMeetingButton}>{meeting.time_formatted}</button>
                                    </div> 
                            }
                            return <div key={key}>
                                        <button disabled className="slot-selected" value={meeting.id} onClick={this.handleMeetingButton}>{meeting.time_formatted}</button>
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