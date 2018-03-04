import React from 'react'
import {Link} from 'react-router-dom'

import Card from './Card'

const AddNewHabitCard = () => {
  return (
    <Link to="/habits/new">
      <Card>
        <div className="dim pointer pa2 tc fw6 black-50">
          <i className="fas fa-plus mr2" />
          Create new habit
        </div>
      </Card>
    </Link>
  )
}

export default AddNewHabitCard
