import React from 'react';
import { render, screen } from '@testing-library/react';
import University from 'interfaces/university';
import CardUniversity from '.';

const mockUniversity: University = {
  web_pages: ['http://www.ui.ac.id/'],
  name: 'Universitas Indonesia',
  alpha_two_code: 'ID',
  'state-province': null,
  domains: ['ui.ac.id'],
  country: 'Indonesia',
};

describe('Component: CardUniversity', () => {
  beforeEach(() => {
    render(<CardUniversity university={mockUniversity} />);
  });

  it('should render name properly', () => {
    expect(screen.getByTestId('name')).toHaveTextContent(mockUniversity.name);
  });

  it('should render link properly', () => {
    expect(screen.getByTestId('link')).toHaveTextContent(mockUniversity.web_pages[0]);
  });

  it('should render country properly', () => {
    expect(screen.getByTestId('country')).toHaveTextContent(mockUniversity.country);
    expect(screen.getByTestId('country').textContent).toMatchInlineSnapshot(`"🇮🇩 Indonesia"`);
  });
});
