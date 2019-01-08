import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleChange(e){
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>Admin Login</h2>
              <p>Please enter your email and password</p>
            </div>
            <form id="Login">
              <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" name ="email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" name = "password" />
              </div>
              <div className="forgot">
                <a href = "https://www.google.com/">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div></div>
      </div>
    
    );
  }
}

export default App;
