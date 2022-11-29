import './App.css';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home.component'

function App() {
  return (
<Router>
<div className="App">
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
    <a class="navbar-brand" href="/">
    <img src="logo192.png" alt="Bootstrap" width="30" height="24"/>
    </a>
      <Link className="navbar-brand link-light" to={'/sign-in'}>
        <b>ResumeVase</b>
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link link-light" to={'/home'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-light" to={'/sign-in'}>
              Sign-In
            </Link>
          </li>
        </ul>
      </div>
      <Link className="nav-item" to={'/sign-up'}>
      <button class="btn btn-outline-light" type="sign-up">New User? Sign-Up</button>
      </Link>
    </div>
  </nav>
  {/* <div className="auth-wrapper">
    <div className="auth-inner"> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  {/* </div> */}

</Router>
  )
};

export default App;
