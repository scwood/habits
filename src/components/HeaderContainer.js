import {connect} from 'react-redux'

import Header from './Header'
import {signOut, getUserDisplayName} from '../store/user'

const mapStateToProps = (state) => {
  return {displayName: getUserDisplayName(state)}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOutClick: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
