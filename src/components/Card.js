import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Card = ({children, className, onClick}) => {
  const classes = classNames('br3 ba b--black-10 pa2-ns pa1 mb3', className)
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card
