import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';

import GridRow from './GridRow';
import GridSquare from './GridSquare';

const WeekGrid = ({onGridClick, habit}) => {
  const today = new Date();
  const sunday = startOfWeek(today);
  const gridSquares = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(sunday, i);
    const formattedDate = format(date, 'yyyy-MM-dd');
    gridSquares.push(
      <GridSquare
        key={i}
        className={
          habit.daysComplete[formattedDate] ? 'bg-green' : 'bg-light-gray'
        }
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

export default WeekGrid;
