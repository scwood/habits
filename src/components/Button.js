import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({children, success, danger, disabled, onClick}) => {
  const classes = classNames('dib br2 pv2 ph3 mr2', {
    'disabled o-60': disabled,
    'pointer dim': !disabled,
    'white hover-white': success || danger,
    'bg-light-gray': !success && !danger,
    'bg-green': success,
    'bg-red': danger,
  })
  return (
    <a onClick={onClick} className={classes}>
      {children}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
