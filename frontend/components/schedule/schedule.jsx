import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Calendar from 'react-calendar';

var moment = require('moment');
moment().format();

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            curr_time: null,
            date: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         // curr_time : hour + ":" + minute + " " + AM_or_PM
        //         curr_time: this.getTime()
        //     })
        // },1000)
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

    render() {
        // momentObject.toString()
        // momentObject.format()
        // momentObject.toISOString()
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
                        <li>9:00 am</li>
                        <li>10:00 am</li>
                        <li>11:00 am</li>
                        <li>12:00 am</li>
                    </ul>
                    <ul>
                        <li>1:00 pm</li>
                        <li>2:00 pm</li>
                        <li>3:00 pm</li>
                        <li>4:00 pm</li>
                    </ul>
                    <ul>
                        <li>5:00 pm</li>
                        <li>6:00 pm</li>
                        <li>7:00 pm</li>
                        <li>8:00 pm</li>
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