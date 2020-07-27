import React from 'react';
import PropTypes from 'prop-types';

import './button.styl';

const Button = (props) => {
  const { title, onClick } = props;

  return (
    <button className="button" type="button" onClick={onClick}>{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
