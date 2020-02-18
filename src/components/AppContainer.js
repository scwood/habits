import {connect} from 'react-redux';

import App from './App';
import {
  isFetchingUser,
  isAuthenticated,
  listenForAuthChanges,
} from '../store/user';

const mapStateToProps = (state) => {
  return {
    isFetchingUser: isFetchingUser(state),
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listenForAuthChanges: () => dispatch(listenForAuthChanges()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
