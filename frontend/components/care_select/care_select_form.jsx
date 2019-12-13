import React from 'react';
import LoginNavBar from '../login_nav_bar/login_nav_bar';
import { Redirect, Link } from 'react-router-dom';

class CareSelectForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleOverall = this.handleOverall.bind(this);
        this.handleEmotional = this.handleEmotional.bind(this);
        this.state = {overall: false, emotional: false};
    }

    handleEmotional() {
      this.props.history.push('/schedule');
    }

    handleOverall() {
      this.props.history.push('/schedule');
    }

    render() {
        return (
            <>
            <LoginNavBar/>
            <div id="care-select-form">                
              <h1>Where can I take you?</h1>
              <div>
                <div className="card-hoverable" onClick={this.handleOverall}>
                  <img src={window.overall_health}/>
                  <h4>Overall Health</h4>
                </div>
                <div className="card-hoverable" onClick={this.handleEmotional}>
                  <img src={window.emotional_health}/>
                  <h4>Emotional Health</h4>
                </div>
              </div>
            </div>
            </>
        )
    }
}

export default CareSelectForm