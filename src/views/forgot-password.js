import React from 'react'

import { Helmet } from 'react-helmet'

import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="forgot-password-dummy-container">
        <span className="forgot-password-text">
          <span>Forgot Password?</span>
        </span>
      </div>
    </div>
  )
}

export default ForgotPassword
