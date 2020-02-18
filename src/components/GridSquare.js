import React from 'react';
import PropTypes from 'prop-types';

const GridSquare = ({className, style, onClick}) => {
  return <div style={style} onClick={onClick} className={className} />;
};

GridSquare.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default GridSquare;
