import PropTypes from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router';

import Card from './Card';
import WeekGrid from './WeekGrid';

const HabitCard = ({habit, history}) => {
  const {id, description} = habit;
  return (
    <Card className="pointer" onClick={() => history.push(`/habits/${id}`)}>
      <div className="pa2">{description}</div>
      <WeekGrid habit={habit} />
    </Card>
  );
};

HabitCard.propTypes = {
  habit: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(HabitCard);
