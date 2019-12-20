import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin_time: '',
            end_time: '',
            user_id: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
      return (e) => {
          this.setState({[field]: e.target.value})
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMeeting(this.state);
    }

    render() {
        return (
            <form id="schedule-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="begin_time" value={this.state.begin_time}
                    onChange={this.update("begin_time")} required/>
                <br/>
                <input type="text" placeholder="end_time" value={this.state.end_time}
                    onChange={this.update("end_time")} required/>
                <br/>
                <input type="text" placeholder="user_id" value={this.state.user_id}
                    onChange={this.update("user_id")} required/>
                <br/>
                <button>Create Meeting</button>
            </form>
        )
    }
}

export default Schedule;