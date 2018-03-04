import PropTypes from 'prop-types'
import React from 'react'

import BackHeader from './BackHeader'
import TextInput from './TextInput'

const SingleHabit = ({match}) => {
  return (
    <div>
      <BackHeader />
      <TextInput />
    </div>
  )
}

SingleHabit.propTypes = {
  match: PropTypes.object.isRequired,
}

export default SingleHabit
