import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({children}) => {
  return <div className="sans-serif mw6 center ph3 black-80">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
