import React from 'react'

import Card from './Card'

export default function AddNewHabitCard() {
  return (
    <Card>
      <div className="pa2 tc fw6 black-30">
        <i className="fas fa-plus mr2" />
        Create new habit
      </div>
    </Card>
  )
}
