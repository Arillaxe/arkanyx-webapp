import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from '@src/components';
import { LoginForm, RegisterForm } from '@src/pages/common';
import logo from '@src/resources/logo.png';
import slice from './slice';

import './header.styl';

const { actions } = slice;

const Header = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(({ header }) => header.modal);

  const openLoginModal = () => dispatch(actions.setModal('login'));
  const openRegisterModal = () => dispatch(actions.setModal('register'));
  const closeModal = () => dispatch(actions.setModal('closed'));

  return (
    <header className="header">
      <div className="header-toolbar">
        <Button title="Login" onClick={openLoginModal} />
        <Button title="Register" onClick={openRegisterModal} />
      </div>
      <img src={logo} className="header-logo" alt="logo" />
      {modalState === 'login' && <Modal modalClose={closeModal}><LoginForm /></Modal>}
      {modalState === 'register' && <Modal modalClose={closeModal}><RegisterForm /></Modal>}
    </header>
  );
};

export default Header;
