import {connect} from 'react-redux'

import AllHabits from './AllHabits'
import {getHabits} from '../store/habits'

const mapStateToProps = (state) => {
  return {
    habits: getHabits(state),
  }
}

export default connect(mapStateToProps)(AllHabits)
