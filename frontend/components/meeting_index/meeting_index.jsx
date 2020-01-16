import React from 'react';
import { Link } from 'react-router-dom';
class MeetingIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        You are at the meeting index.
        <br/>
        <Link to={`/schedule`}>Back To Schedule</Link>
      </div>
    )
  }
}

export default MeetingIndex;



