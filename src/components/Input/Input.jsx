import React from 'react';
import PropTypes from 'prop-types';

import './input.styl';

const Input = (props) => {
  const { label, name, type } = props;

  return (
    <div className="input">
      <label htmlFor={name} id={name}>
        {label}
        <input type={type} name={name} id={name} />
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
