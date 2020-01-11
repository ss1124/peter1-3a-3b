import React from 'react';
import {Link, Redirect} from 'react-router-dom';
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
  }

  handleLogout(){
    this.props.logout();
  }

  render() {
    return (
      <div id="index">
        <button onClick={this.handleLogout}>Log Out</button>
        <br/>
        <Link to="/care_select">Care Select</Link>
        <br/>
        <Link to="/schedule">schedule</Link>
      </div>
    )
  }
}

export default Index;



