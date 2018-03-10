import React from 'react'
import PropTypes from 'prop-types'

const GridSquare = ({green, onClick}) => {
  return (
    <div
      style={{width: '12%', paddingBottom: '12%', margin: '1.15%'}}
      onClick={onClick}
      className={green ? 'bg-green' : 'bg-light-gray'}
    />
  )
}

GridSquare.propTypes = {
  green: PropTypes.bool,
  onClick: PropTypes.func,
}

GridSquare.propTypes = {}

export default GridSquare
