import PropTypes from 'prop-types'
import React from 'react'

import Card from './Card'
import WeekGrid from './WeekGrid'

const HabitCard = ({habit}) => {
  return (
    <Card>
      <div className="pa2">{habit.description}</div>
      <WeekGrid />
    </Card>
  )
}

HabitCard.propTypes = {
  habit: PropTypes.object.isRequired,
}

export default HabitCard
