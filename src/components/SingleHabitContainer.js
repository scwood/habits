import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import SingleHabit from './SingleHabit'
import {createHabit, getHabitById, deleteHabit} from '../store/habits'

const mapStateToProps = (state, ownProps) => {
  return {
    habit: getHabitById(state, ownProps.match.params.id),
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    handleSubmit: (id, habit) => {
      dispatch(createHabit(habit))
      history.push('/')
    },
    handleDelete: (id) => {
      dispatch(deleteHabit(id))
      history.push('/')
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleHabit),
)
