import { useState } from 'react';

interface Props {
  onSubmit: (payload) => {},
}

export default function FormSearch({
  onSubmit,
}: Props) {
  const [name, setName] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    onSubmit({
      name
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={name}
        onInput={e => setName(e.target.value)}
        className="input"
        type="text"
        placeholder="Search universities..."
      />
    </form>
  )
}
