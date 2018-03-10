import {connect} from 'react-redux'

import HabitList from './HabitList'
import {getHabits} from '../store/habits'

const mapStateToProps = (state) => {
  return {
    habits: getHabits(state),
  }
}

export default connect(mapStateToProps)(HabitList)
