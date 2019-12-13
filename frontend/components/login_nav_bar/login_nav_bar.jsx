import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toLogin: false, toSplash: false }
    this.handleToLogin = this.handleToLogin.bind(this);
    this.handleToSplash = this.handleToSplash.bind(this);
  }

  handleToLogin() {
    this.setState({toLogin: true});
  }

  handleToSplash() {
    this.setState({toSplash: true});
  }

  render() {
    if (this.state.toLogin) {
      return <Redirect to={'/login'}/>
    }
    if (this.state.toSplash) {
      return <Redirect to={'/'}/>
    }
    return (
      <div id="login-nav-bar-with-border-bottom">
        <div id="login-nav-bar">
          <div>
            <img onClick={this.handleToSplash} src={window.pruvia_logo_with_text}/>
          </div>
          <nav>
              <h1>Find Doc</h1>
              <h1>FAQ</h1>
              <div>
                <img src={window.login} />
                <h1 onClick={this.handleToLogin}>Log in</h1>
              </div>
          </nav>
        </div>
        <div className="bottom-border"></div>
      </div>
    )
  }
}


export default LoginNavBar;


