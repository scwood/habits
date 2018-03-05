import {connect} from 'react-redux'

import SingleHabit from './SingleHabit'
import {createHabit} from '../store/habits'

const mapStateToProps = () => {
  return {
    habit: undefined,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (id, habit) => {
      dispatch(createHabit(habit))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleHabit)
