import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '@src/pages/common/components';

const Base = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
