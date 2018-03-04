import React from 'react'

const WeekHeader = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  return (
    <div
      className="sticky flex bb bt b--black-10 mb3 ph2 bg-white"
      style={{top: -1}}>
      {days.map((day) => (
        <div key={day} className="tc f6 fw6 w-100 mv2">
          {day}
        </div>
      ))}
    </div>
  )
}

export default WeekHeader
