import React from 'react'

import Card from './Card'
import WeekGrid from './WeekGrid'

function HabitCard({habit}) {
  return (
    <Card>
      <div className="pa2">{habit.name}</div>
      <WeekGrid />
    </Card>
  )
}

export default HabitCard
