import {connect} from 'react-redux';

import HabitForm from './HabitForm';
import {
  createHabit,
  updateHabit,
  getHabitById,
  deleteHabit,
} from '../store/habits';

const mapStateToProps = (state, ownProps) => {
  return {
    habit: getHabitById(state, ownProps.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    handleSubmit: (id, habit) => {
      if (id) {
        dispatch(updateHabit(id, habit));
      } else {
        dispatch(createHabit(habit));
      }
      history.push('/');
    },
    handleDelete: (id) => {
      dispatch(deleteHabit(id));
      history.push('/');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitForm);
