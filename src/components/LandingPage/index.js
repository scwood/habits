import PropTypes from 'prop-types'
import React from 'react'

import googleSignInButton from './btn_google_signin_light_normal_web@2x.png'

export default function LandingPage({onGoogleSignInClick}) {
  return (
    <div className="dt center vh-100">
      <div className="dtc v-mid" style={{width: 200}}>
        <img
          className="pointer"
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
