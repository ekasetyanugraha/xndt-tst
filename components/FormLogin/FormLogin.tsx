import React, { useRef } from 'react';
import { PayloadInterface } from 'interfaces/payload-session';
import Field from 'components/Field';

interface Props {
  onSubmit?: (payload: PayloadInterface) => void;
}

export default function FormLogin({ onSubmit = () => {} }: Props): JSX.Element {
  const emailInput = useRef<HTMLInputElement>();
  const passwordInput = useRef<HTMLInputElement>();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <Field label="Email">
        <input type="text" className="input" ref={emailInput} data-testid="input-email" />
      </Field>

      <Field label="Password">
        <input type="password" className="input" ref={passwordInput} data-testid="input-password" />
      </Field>

      <button type="submit" className="button is-primary is-fullwidth" data-testid="btn-submit">
        Login
      </button>
    </form>
  );
}
