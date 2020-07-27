import React from 'react';
import { Form, Input } from '@src/components';

import './loginForm.styl';

const LoginForm = () => {
  const onSubmit = () => {};

  return (
    <Form
      title="Login"
      submitTitle="Login"
      submitClass="button"
      onSubmit={onSubmit}
    >
      <Input label="Username" name="username" />
      <Input label="Password" name="password" type="password" />
    </Form>
  );
};

export default LoginForm;
