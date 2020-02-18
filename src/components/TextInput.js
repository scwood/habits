import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({label, value, onChange}) => {
  return (
    <div className="mb3">
      {label ? <label className="f6 b db mb2">{label}</label> : null}
      <input
        id="name"
        value={value}
        onChange={onChange}
        className="input-reset ba b--black-20 pa2 db w-100"
        type="text"
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
