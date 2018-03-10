import React from 'react'
import PropTypes from 'prop-types'

import GridSquare from './GridSquare'

const GridRow = ({children}) => {
  const numChildren = React.Children.count(children)
  if (numChildren < 1) {
    return null
  }
  const widthPerSquare = 100 / numChildren
  const contentSize = widthPerSquare * 0.84
  const marginSize = widthPerSquare * 0.16 / 2
  return (
    <div className="flex">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            width: `${contentSize}%`,
            paddingBottom: `${contentSize}%`,
            margin: `${marginSize}%`,
          },
        })
      })}
    </div>
  )
}

GridRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(GridSquare),
    PropTypes.objectOf(GridSquare),
  ]),
}

export default GridRow
