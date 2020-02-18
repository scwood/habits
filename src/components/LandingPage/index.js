import PropTypes from 'prop-types';
import React from 'react';

import googleSignInButton from './btn_google_signin_light_normal_web@2x.png';

const LandingPage = ({onGoogleSignInClick}) => {
  return (
    <div className="dt center vh-100 sans-serif">
      <div className="dtc v-mid tc">
        <div className="f2 fw6 black-80">Habit Tracker</div>
        <div className="f5 fw4 black-50 mt1 mb4">Sort yourself out.</div>
        <img
          className="pointer"
          style={{width: 200}}
          alt="Google sign in button"
          src={googleSignInButton}
          onClick={onGoogleSignInClick}
        />
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  onGoogleSignInClick: PropTypes.func.isRequired,
};

export default LandingPage;
