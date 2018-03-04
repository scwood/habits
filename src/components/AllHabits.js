import React from 'react'
import PropTypes from 'prop-types'

import AddNewHabitCard from './AddNewHabitCard'
import HabitCard from './HabitCard'
import WeekHeader from './WeekHeader'

const AllHabits = ({habits}) => {
  return (
    <div>
      <AddNewHabitCard />
      <WeekHeader />
      {habits.map((habit) => <HabitCard key={habit.id} habit={habit} />)}
    </div>
  )
}

AllHabits.propTypes = {
  habits: PropTypes.array.isRequired,
}

export default AllHabits
