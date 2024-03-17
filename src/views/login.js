import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <div className="login-input-text">
          <img
            alt="BGI218"
            src="/external/bgi218-dfwob.svg"
            className="login-bg"
          />
          <span className="login-text">
            <span>Password</span>
          </span>
          <span className="login-text02">
            <span>Show</span>
          </span>
        </div>
        <div className="login-input-text1">
          <img
            alt="BGI218"
            src="/external/bgi218-lk2j.svg"
            className="login-bg1"
          />
          <span className="login-text04">Username</span>
          <span className="login-text05">Forgot password?</span>
          <span className="login-text06"></span>
        </div>
        <span className="login-text07">
          <span>Login</span>
        </span>
        <button className="login-socialbutton"></button>
        <button className="login-socialbutton1">
          <img
            alt="image"
            src="/external/microsoft_png5-200h.png"
            className="login-image"
          />
        </button>
        <span className="login-text09">
          <span>Sign in with Microsoft</span>
        </span>
        <span className="login-text11">
          <span>Sign in with Google</span>
        </span>
        <img
          alt="IconGoogle2185"
          src="/external/icongoogle2185-oayp.svg"
          className="login-icon-google"
        />
        <img
          alt="Vector12185"
          src="/external/vector12185-j5jo.svg"
          className="login-vector1"
        />
        <button className="login-main-button-desktop">
          <span className="login-text13">Sign in</span>
        </button>
        <div className="login-rectangle13">
          <img
            alt="image"
            src="/external/smktinusa-400w.jpg"
            className="login-image1"
          />
        </div>
        <span className="login-text14">
          <span>Or</span>
        </span>
      </div>
    </div>
  )
}

export default Login
