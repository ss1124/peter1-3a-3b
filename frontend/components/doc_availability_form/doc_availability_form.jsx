import React from 'react';
import { Link } from 'react-router-dom';
//import DateTimePicker from 'react-datetime-picker';
import moment from 'moment-timezone';


class DocAvailabilityForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        startTime: "2020-01-18 08:30",
        endTime: "2020-01-18 09:00",
        time_zone: "America/Los_Angeles",
    }
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleTimeZoneChange = this.handleTimeZoneChange.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleStartChange(e) {
      this.setState({startTime: e.target.value})
  }

  handleEndChange(e) {
      this.setState({endTime: e.target.value})
  }

  handleTimeZoneChange(e) {
    this.setState({time_zone: e.target.value})
  }

  handleSubmit2(e) {
    e.preventDefault();
    let newYorkMomentBegin = moment.tz(this.state.startTime, this.state.time_zone).format();
    let newYorkMomentEnd = moment.tz(this.state.endTime, this.state.time_zone).format();
    let meeting = {
      begin_time: `${newYorkMomentBegin}`,
      end_time: `${newYorkMomentEnd}`,
      doctor_id: `1`,
    };
    this.props.createMeeting(meeting)
    
  }


  render() {
    return (
        <div className="doc-avail">
            <p>start time</p>
            <p>Try something like: 2020-01-17 08:30</p>
            <form onSubmit={this.handleSubmit2}>
              <input type="text" value={this.state.startTime} onChange={this.handleStartChange}/>
              <input type="text" value={this.state.endTime} onChange={this.handleEndChange}/>
              <input type="text" value={this.state.time_zone} onChange={this.handleTimeZoneChange}/>
              <button>Submit</button>
            </form>
            <br/>
            {/* <button onClick={this.handleSubmit("8:00")}>8:00 am</button> */}
            <br/>
            {/* <button onClick={this.handleSubmit("8:30")}>8:30 am</button> */}
        </div>
    )
  }

}


export default DocAvailabilityForm;