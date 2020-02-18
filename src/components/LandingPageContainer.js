import {connect} from 'react-redux';

import LandingPage from './LandingPage';
import {signIn} from '../store/user';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoogleSignInClick: () => dispatch(signIn()),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
