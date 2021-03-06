import React, { Component } from 'react';
// import axios from 'axios'
// import { Cookies } from 'react-cookie';
import AuthService from '../components/AuthService'
import Popup from './../components/popup'

// Cookies.set(token, auth_token_here, {path: '/'});

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username : "",
            userType : "employee",
            password : "",
            isOpen : false
        }
        this.Auth = new AuthService();
    }

    openPopup = () => {
        if(this.state.isOpen === false){
            this.setState({
                isOpen: true
            });
        }
        else{
            this.setState({
                isOpen: false
            });
        }
    }

    closePopup = () => {
        this.setState({
            isOpen: false
        });
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
        // axios({
        //     method: "POST",
        //     url: "https://myshoppingapi.herokuapp.com/login",
        //     data : userLogin,
        //   }).then(res => {
        //     console.log(this.setToken(res.token))
        //   })
        //   .catch(error => console.log(error));
        this.Auth.login(userLogin)
            .then(res =>{
               console.log(res)
            })
            .catch(err =>{
                alert(err);
            })
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
                    <div id="mybutton">
                        {this.state.isOpen ? <div></div>:<button className="feedback" onClick = {this.openPopup}>Message to us</button>}
                    </div>
                </div>
                {this.state.isOpen ? <Popup onClose = {this.closePopup}/>: ""}
            </div>
        );
    }
}

export default Login;