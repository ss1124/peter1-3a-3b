import React from 'react';
import { Link } from 'react-router-dom';
//import DateTimePicker from 'react-datetime-picker';
import moment from 'moment-timezone';


class DocAvailabilityForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        startTime: new Date(),
        endTime: new Date,
    }
    this.changeStartTime = this.changeStartTime.bind(this);
    this.changeEndTime = this.changeEndTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeStartTime(date) {
      this.setState({startTime})
  }

  changeEndTime(date) {
      this.setState({endTime})
  }

  handleSubmit(time) {
    if (time == "8:00") {
      return (e) => {
        e.preventDefault();
        debugger
        let newYorkMomentBegin = moment.tz("2020-01-13 08:00", "America/New_York").format();
        debugger
        let newYorkMomentEnd = moment.tz("2020-01-13 08:30", "America/New_York").format();
        debugger
        this.props.createMeeting({begin_time: `${newYorkMomentBegin}`, end_time: `${newYorkMomentEnd}`, doctor_id: `1`})
      }
    } else if (time == "8:30") {
      return (e) => {
        e.preventDefault();
        debugger
        let newYorkMomentBegin = moment.tz("2020-01-13 08:30", "America/New_York").format();
        debugger
        let newYorkMomentEnd = moment.tz("2020-01-13 09:00", "America/New_York").format();
        debugger
        this.props.createMeeting({begin_time: `${newYorkMomentBegin}`, end_time: `${newYorkMomentEnd}`, doctor_id: `1`})
      }
      
    }
    
    // hard code doctor id
    
  }

  render() {
    return (
        <div>
            <p>start time</p>
            
            {/* <DateTimePicker
                onChange={this.onChange}
                value={this.state.startTime}
            /> */}
            {/* <p>end time</p>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.endTime}
            /> */}
            <br/>
            <button onClick={this.handleSubmit("8:00")}>8:00 am</button>
            <br/>
            <button onClick={this.handleSubmit("8:30")}>8:30 am</button>
        </div>
    )
  }

}


export default DocAvailabilityForm;