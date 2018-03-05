import {connect} from 'react-redux'

import AllHabits from './AllHabits'
import {getHabits} from '../store/habits'

const mapStateToProps = (state) => {
  return {
    habits: getHabits(state),
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllHabits)
