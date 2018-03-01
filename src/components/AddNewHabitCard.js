import React from 'react'

import Card from './Card'

export default function AddNewHabitCard() {
  return (
    <Card>
      <div className="dim pointer pa2 tc fw6 black-50">
        <i className="fas fa-plus mr2" />
        Create new habit
      </div>
    </Card>
  )
}
