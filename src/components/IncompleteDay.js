import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import GridSquare from './GridSquare';

const IncompleteDay = (props) => {
  return (
    <GridSquare
      {...props}
      className="bg-light-gray"
      style={{...props.style, position: 'relative'}}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <FontAwesomeIcon
          className="f3 f2-ns moon-gray"
          fixedWidth={true}
          icon={faTimes}
        ></FontAwesomeIcon>
      </div>
    </GridSquare>
  );
};

IncompleteDay.propTypes = {
  style: PropTypes.object,
};

export default IncompleteDay;
