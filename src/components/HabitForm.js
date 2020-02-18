import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {withRouter} from 'react-router';

import Button from './Button';
import BackHeader from './BackHeader';
import TextInput from './TextInput';

const propTypes = {
  match: PropTypes.object.isRequired,
  habit: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
};

const HabitForm = withRouter((props) => {
  const habitId = props.match.params.id;
  const [habit, setHabit] = useState({
    description: '',
    ...props.habit,
  });
  return (
    <div>
      <BackHeader />
      <TextInput
        label="Description"
        value={habit.description}
        onChange={(e) => setHabit({...habit, description: e.target.value})}
      />
      <Button success onClick={() => props.handleSubmit(habitId, habit)}>
        Submit
      </Button>
      {habitId && (
        <Button danger onClick={() => props.handleDelete(habitId)}>
          Delete
        </Button>
      )}
    </div>
  );
});

HabitForm.propTypes = propTypes;

export default HabitForm;
