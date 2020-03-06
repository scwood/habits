import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Button from './Button';
import BackHeader from './BackHeader';
import TextInput from './TextInput';
import {
  createHabit,
  updateHabit,
  getHabitById,
  deleteHabit,
} from '../store/habits';

const propTypes = {
  match: PropTypes.object.isRequired,
  habit: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
};

const HabitForm = withRouter(({habit, handleSubmit, handleDelete}) => {
  const [localHabit, setLocalHabit] = useState({
    description: '',
  });

  useEffect(() => habit && setLocalHabit(habit), [habit]);

  return (
    <>
      <BackHeader />
      <TextInput
        label="Description"
        value={localHabit.description}
        onChange={(e) =>
          setLocalHabit({...localHabit, description: e.target.value})
        }
      />
      <Button success onClick={() => handleSubmit(localHabit)}>
        Submit
      </Button>
      {localHabit.id && (
        <Button danger onClick={() => handleDelete(localHabit)}>
          Delete
        </Button>
      )}
    </>
  );
});

HabitForm.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    habit: getHabitById(state, ownProps.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    handleSubmit: (habit) => {
      if (habit.id) {
        dispatch(updateHabit(habit));
      } else {
        dispatch(createHabit(habit));
      }
      history.push('/');
    },
    handleDelete: (habit) => {
      dispatch(deleteHabit(habit));
      history.push('/');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitForm);
