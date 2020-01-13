import React from 'react';
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';


class DocAvailabilityForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        startTime: new Date(),
        endTime: new Date,
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(date) {
      this.setState({date})
  }

  handleSubmit(e) {
    e.preventDefault();
    // const projectId = 
    // this.props.createProject({title: `${title}`, description: `${description}`, user_id: `${this.props.currentUser.id}`})
    //   .then(this.props.history.push('/projects')) 
  }

  render() {
    debugger
    return (
        <div>
            <p>start time</p>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.startTime}
            />
            <p>end time</p>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.endTime}
            />
            <br/>
            <button onClick={this.handleSubmit}>Log Availability</button>
        </div>
    )
  }

}


export default DocAvailabilityForm;