import PropTypes from 'prop-types'
import React from 'react'

import googleSignInButton from './btn_google_signin_light_normal_web@2x.png'

export default function LandingPage({onGoogleSignInClick}) {
  return (
    <div className="dt center vh-100 sans-serif black-70">
      <div className="dtc v-mid tc">
        <h1 className="f4 f1-ns fw6">Habit Tracker</h1>
        <img
          className="pointer"
          style={{width: 200}}
          alt="Google sign in button"
          src={googleSignInButton}
          onClick={onGoogleSignInClick}
        />
      </div>
    </div>
  )
}

LandingPage.propTypes = {
  onGoogleSignInClick: PropTypes.func.isRequired,
}
