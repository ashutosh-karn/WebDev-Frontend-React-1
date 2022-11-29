import React, { Component } from "react";
export default class Home extends Component {
    render() {
        return (
        <div className="auth-home">
        <div className="auth-mybox">
            <img src="homepage.png" className="public" alt="..."/> 
            <h5 className="card-title" >This is the homepage.</h5>
            <p className="home-redirect">You are currently on the home page. Please <a href="/sign-in" >Sign-In</a> or <a href="/sign-up">Sign-Up</a></p>
            <a href="https://www.linkedin.com/in/ashutoshkarn/" className="btn btn-danger">Visit My Profile</a>
        </div>
        </div>
      )
    }
}