import React from 'react';
import PropTypes from 'prop-types';

import './button.styl';

const Button = (props) => {
  const { title } = props;

  return (
    <button className="button" type="button">{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
