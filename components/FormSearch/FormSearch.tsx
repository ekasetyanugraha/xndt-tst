import React, { useRef } from 'react';
import UrlParamsUniversity from 'interfaces/url-params-university';

interface Props {
  onSubmit?: (payload: UrlParamsUniversity) => void;
}

export default function FormSearch({ onSubmit = () => {} }: Props): JSX.Element {
  const searchInput = useRef<HTMLInputElement>();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name: searchInput.current.value.trim() || null,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} data-testid="form">
      <input
        ref={searchInput}
        className="input"
        type="text"
        placeholder="Search universities..."
        data-testid="input-name"
      />

      <button className="is-hidden" data-testid="btn-submit">
        Submit
      </button>
    </form>
  );
}
