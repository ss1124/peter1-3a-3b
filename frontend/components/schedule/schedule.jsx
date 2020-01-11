import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Calendar from 'react-calendar';

var moment = require('moment');
moment().format();

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin_time: '',
            end_time: '',
            user_id: '',
            curr_time: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        debugger
        setInterval(() => {
            debugger
            this.setState({
                // curr_time : hour + ":" + minute + " " + AM_or_PM
                curr_time: this.getTime()
            })
        },1000)
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

    render() {
        // momentObject.toString()
        // momentObject.format()
        // momentObject.toISOString()
        return (
            <>
    <div>Times shown in America/New_York clock. Current time is {this.state.curr_time}</div>
                <Calendar 
                    onChanged={this.onChange}
                    value={this.state.date}
                />
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