import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '.';

describe('Component: Panel', () => {
  it('should show panel with primary color when color is not provided', () => {
    render(<Panel />);

    expect(screen.getByTestId('panel').className).toMatchInlineSnapshot(`"panel is-primary"`);
  });

  it('should show panel with provided color', () => {
    render(<Panel color="danger" />);

    expect(screen.getByTestId('panel').className).toMatchInlineSnapshot(`"panel is-danger"`);
  });

  it('should show panel with provided color', () => {
    render(<Panel color="danger" />);

    expect(screen.getByTestId('panel').className).toMatchInlineSnapshot(`"panel is-danger"`);
  });

  it('should show children properly', () => {
    render(
      <Panel title="Test Panel Title">
        <p>Test Children</p>
      </Panel>,
    );

    expect(screen.getByTestId('panel')).toMatchSnapshot();
  });
});
