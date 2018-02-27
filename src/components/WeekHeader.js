import React from 'react'

export default function WeekHeader() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  return (
    <div
      className="flex bb bt b--black-10 mb3 ph2 bg-white"
      style={{position: 'sticky', top: -1}}
    >
      {days.map((day) => (
        <div key={day} className="tc f6 fw6 w-100 mv2">
          {day}
        </div>
      ))}
    </div>
  )
}
