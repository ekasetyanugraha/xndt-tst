import { useRef } from 'react';
import Field from 'components/Field';

export default function FormLogin({
  onSubmit,
}) {
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field label="Email">
        <input type="text" className="input" ref={emailInput} />
      </Field>

      <Field label="Password">
        <input type="password" className="input" ref={passwordInput} />
      </Field>

      <button type="submit" className="button is-primary is-fullwidth">Login</button>
    </form>
  )
}
