import React from 'react';

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
      </div>
    )
  }
}

export default Index;



