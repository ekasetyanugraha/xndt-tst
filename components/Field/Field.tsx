import React from 'react';

interface Props {
  label?: string;
  help?: string;
  children?: JSX.Element | JSX.Element[];
}

export default function Field({ label, help, children }: Props): JSX.Element {
  return (
    <div className="field" data-testid="field">
      {label && <label className="label">{label}</label>}
      {children && <div className="control">{children}</div>}
      {help && <p className="help">{help}</p>}
    </div>
  );
}
