import React from 'react';
import { Link } from 'react-router-dom'
import LoginNavBar from '../login_nav_bar/login_nav_bar';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }
      this.setState({[field]: e.target.value})
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <>
        <LoginNavBar />
        <div id="signup-form" className="session-page">
            <h1>Registration</h1>
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="test" id="login-errors" >{this.props.errors.map(err =>  <li>{err}<br/></li>)}</div>

              <input autoFocus="autofocus" type="text" placeholder="First Name" value={this.state.first_name} 
                      onChange={this.update("first_name")} required/>

              <input type="text" placeholder="Last Name" value={this.state.last_name}
                      onChange={this.update("last_name")} required/>

              <input autoComplete="off"
                      placeholder="Email" type="email" value={this.state.email} 
                              onChange={this.update("email")} required/>
              
              <input autoComplete="off" placeholder="Password" 
                      type="password"  value={this.state.password} 
                              onChange={this.update("password")} required/>

              <button>Sign Up</button>
            </form>
            <Link to="/login">Already have an account? Log in.</Link>
        </div>  
      </>
    )
  }

}


export default SignupForm;