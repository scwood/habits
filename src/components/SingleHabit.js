import PropTypes from 'prop-types'
import React from 'react'

import BackHeader from './BackHeader'

const SingleHabit = ({match}) => {
  return (
    <div>
      <BackHeader />
      {match.params.id}
    </div>
  )
}

SingleHabit.propTypes = {
  match: PropTypes.object.isRequired,
}

export default SingleHabit
