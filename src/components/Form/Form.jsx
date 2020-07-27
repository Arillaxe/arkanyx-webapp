import React from 'react';
import PropTypes from 'prop-types';

import './form.styl';

const Form = (props) => {
  const {
    children,
    title,
    onSubmit,
    submitTitle,
    submitClass,
  } = props;

  // TODO: rename this
  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fields = children
      .filter(child => child.props.type !== 'submit')
      .reduce((acc, child) => ({
        ...acc,
        [child.props.name]: formData.get(child.props.name),
      }), {});

    onSubmit(fields);
  };

  return (
    <div className="form">
      <div className="form-title">{title}</div>
      <form onSubmit={submit}>
        {children}
        <button type="submit" className={submitClass}>{submitTitle}</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  submitTitle: PropTypes.string,
  submitClass: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  submitTitle: 'Submit',
  submitClass: '',
  onSubmit: () => {},
};

export default Form;
