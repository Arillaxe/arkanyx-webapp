import React from 'react';
import { Form, Input } from '@src/components';

import './registerForm.styl';

const RegisterForm = () => {
  const onSubmit = () => {};

  return (
    <Form
      title="Regsiter"
      submitTitle="Regsiter"
      submitClass="button"
      onSubmit={onSubmit}
    >
      <Input label="Email" name="email" type="email" />
      <Input label="Username" name="username" />
      <Input label="Password" name="password" type="password" />
      <Input label="Password again" name="password-again" type="password" />
    </Form>
  );
};

export default RegisterForm;
