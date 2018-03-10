import React from 'react'
import getDay from 'date-fns/get_day'
import classNames from 'classnames'

const WeekHeader = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayOfWeek = getDay(new Date())
  return (
    <div
      className="sticky flex bb bt b--black-10 mb3 bg-white ph2-ns ph1"
      style={{top: -1}}
    >
      {days.map((day, i) => {
        const classes = classNames('tc f6 fw6 w-100 pv2', {
          underline: i === dayOfWeek,
        })
        return (
          <div key={day} style={{margin: '0% 1.15%'}} className={classes}>
            {day}
          </div>
        )
      })}
    </div>
  )
}

export default WeekHeader
