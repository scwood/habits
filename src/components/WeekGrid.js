import PropTypes from 'prop-types';
import React from 'react';
import addDays from 'date-fns/addDays';
import formatDate from 'date-fns/format';
import startOfDay from 'date-fns/startOfDay';
import startOfWeek from 'date-fns/startOfWeek';
import {connect} from 'react-redux';

import CompleteDay from './CompleteDay';
import GridRow from './GridRow';
import IncompleteDay from './IncompleteDay';
import PendingDay from './PendingDay';
import {toggleDay} from '../store/habits';

const WeekGrid = ({onGridClick, habit}) => {
  const today = startOfDay(new Date());
  const sunday = startOfWeek(today);
  const gridSquares = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(sunday, i);
    const formattedDate = formatDate(date, 'yyyy-MM-dd');
    let DayComponent;
    if (habit.daysComplete[formattedDate]) {
      DayComponent = CompleteDay;
    } else if (date < today) {
      DayComponent = IncompleteDay;
    } else {
      DayComponent = PendingDay;
    }
    gridSquares.push(
      <DayComponent
        key={`${habit.id}-${i}`}
        onClick={(event) => {
          event.stopPropagation();
          onGridClick(habit.id, formattedDate);
        }}
      />,
    );
  }
  return <GridRow>{gridSquares}</GridRow>;
};

WeekGrid.propTypes = {
  onGridClick: PropTypes.func.isRequired,
  habit: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGridClick: (id, date) => {
      dispatch(toggleDay(id, date));
    },
  };
};

export default connect(null, mapDispatchToProps)(WeekGrid);
