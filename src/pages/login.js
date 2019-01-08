import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username : "",
            userType : "employee",
            password : ""
        }
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        
    }

    onLogin = (e) => {
        e.preventDefault()
        var {username, password, userType} = this.state
        var userLogin = {
            userType : userType,
            username : username,
            password : password
        }
        axios({
            method: "POST",
            url: "https://myshoppingapi.herokuapp.com/login",
            data : userLogin,
          }).then(res => {
            console.log(this.setToken(res.token))
          })
          .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Admin Login</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <form id="Login" onSubmit = {this.onLogin}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email Address" name ="username" onChange = {this.handleChange} />
                                    {/* <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" name ="email" /> */}
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" name = "password" onChange = {this.handleChange} />
                                </div>
                                <div className="forgot">
                                    <a href = "https://www.google.com/">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Login;