import React from 'react'

function Header({children}) {
  return (
    <div className='pv4-ns pv3'>
      <div className='f5 f4-ns fw6'>{children}</div>
    </div>
  )
}

export default Header
