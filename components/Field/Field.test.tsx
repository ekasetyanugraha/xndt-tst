import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from '.';

describe('Component: Field', () => {
  it('should render properly without any props', () => {
    render(<Field />);

    expect(screen.getByTestId('field')).toMatchSnapshot();
  });

  it('should render properly', () => {
    render(
      <Field label="Test Label" help="Test Help">
        <p>Test</p>
      </Field>,
    );

    expect(screen.getByTestId('field')).toMatchSnapshot();
  });
});
