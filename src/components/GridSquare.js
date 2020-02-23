import React from 'react';
import PropTypes from 'prop-types';

const GridSquare = ({className, style, onClick, children}) => {
  return (
    <div style={style} onClick={onClick} className={className}>
      {children}
    </div>
  );
};

GridSquare.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default GridSquare;
