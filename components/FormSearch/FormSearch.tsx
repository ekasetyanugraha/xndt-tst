import React, { useState } from 'react';
import UrlParamsUniversity from 'interfaces/url-params-university';

interface Props {
  onSubmit: (payload: UrlParamsUniversity) => void;
}

export default function FormSearch({ onSubmit }: Props): JSX.Element {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={name}
        onInput={(e) => setName(e.target.value)}
        className="input"
        type="text"
        placeholder="Search universities..."
      />
    </form>
  );
}
