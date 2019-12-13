import React from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../util/session_api_util';
import LoginNavBar from '../login_nav_bar/login_nav_bar';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({email: this.state.email, password: this.state.password});
  }

  update(field) {
    return (e) => {
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <>
      <LoginNavBar />
      <div className="session-page">
          <h1>Welcome Back!</h1>
          <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="test" id="login-errors" >{this.props.errors.map(err =>  <li>{err}<br/></li>)}</div>
            <input autoFocus="autofocus" placeholder="Email" 
                            id="username-input" type="email" value={this.state.email} 
                                                    onChange={this.update("email")} required/>
            <input  type="text"  id="password-input" placeholder="Password"
                              type="password" value={this.state.password} 
                                        onChange={this.update("password")} required/>
            <button>Sign in</button>
          </form>
          <Link to="/signup">Don't have an account? Sign Up Instead.</Link>

      </div>
      </>
    )
  }
}

export default LoginForm;