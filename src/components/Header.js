import React from 'react'
import PropTypes from 'prop-types'

function Header({name, onSignOutClick}) {
  return (
    <div className="dt pv4-ns pv3 w-100">
      <div className="dtc v-mid f5 f4-ns fw6 tl">Habit Tracker</div>
      <div className="dtc v-mid f6 fw6 tr">
        <a className="dim pointer" onClick={onSignOutClick}>
          Sign out ({name})
        </a>
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
}

export default Header
