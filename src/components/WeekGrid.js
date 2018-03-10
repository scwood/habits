import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import startOfWeek from 'date-fns/start_of_week'

import GridSquare from './GridSquare'

const WeekGrid = ({onGridClick, habit}) => {
  // get date at start of the week
  const sunday = startOfWeek(new Date())
  const gridSquares = []
  for (let i = 0; i < 7; i++) {
    const date = addDays(sunday, i)
    const formattedDate = format(date, 'YYYY-MM-DD')
    gridSquares.push(
      <GridSquare
        key={i}
        green={habit.daysComplete[formattedDate]}
        onClick={(event) => {
          event.stopPropagation()
          onGridClick(habit.id, formattedDate)
        }}
      />,
    )
  }
  return <div className="flex">{gridSquares}</div>
}

WeekGrid.propTypes = {
  onGridClick: PropTypes.func.isRequired,
  habit: PropTypes.object.isRequired,
}

export default WeekGrid
