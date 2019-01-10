import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="form-popup">
                <form className="form-container">
                    <h1>Login</h1>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit" className="btn">Login</button>
                    <button type="button" className="btn cancel" onClick = {this.props.onClose}>Close</button>
                    {this.props.children}
                </form>
            </div>
        );
    }
}

export default Popup;