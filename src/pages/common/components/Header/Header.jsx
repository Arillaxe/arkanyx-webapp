import React from 'react';
import { Button } from '@src/pages/common/components';
import logo from '@src/resources/logo.png';

import './header.styl';

const Header = () => (
  <header className="header">
    <div className="header-toolbar">
      <Button title="Login" />
      <Button title="Register" />
    </div>
    <img src={logo} className="header-logo" alt="logo" />
  </header>
);

export default Header;
