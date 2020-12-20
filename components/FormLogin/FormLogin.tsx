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
    <form onSubmit={handleSubmit} data-testid="form-login">
      <Field label="Email" help="We currently only have 1 user with this email: ekasetyanugraha@gmail.com">
        <input type="text" name="email" className="input" ref={emailInput} data-testid="input-email" />
      </Field>

      <Field label="Password" help="Psst.. it's supersecretpassword">
        <input type="password" className="input" ref={passwordInput} data-testid="input-password" />
      </Field>

      <button type="submit" className="button is-primary is-fullwidth" data-testid="btn-submit">
        Login
      </button>
    </form>
  );
}
