import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UniversityService from 'services/universities';
import PageIndex from 'pages/index';

jest.mock('services/universities');

const mockGetUniversities = UniversityService.getUniversities as jest.Mock;
const mockGetUniversitiesSuccessResponse = {
  data: [
    {
      web_pages: ['http://www.marywood.edu'],
      name: 'Marywood University',
      alpha_two_code: 'US',
      'state-province': null,
      domains: ['marywood.edu'],
      country: 'United States',
    },
  ],
  meta: {
    limit: 10,
    offset: 0,
    total: 100,
    status: 200,
  },
};
mockGetUniversities.mockResolvedValue(mockGetUniversitiesSuccessResponse);

describe('Page: PageContainer', () => {
  it('should call getUniversities API', () => {
    waitFor(() => {
      expect(mockGetUniversities).toHaveBeenCalled();
    });
  });

  it('should have Navbar', async () => {
    render(<PageIndex />);
    const navigation = await screen.findByRole('navigation');

    expect(navigation).toBeTruthy();
  });

  it('should have Footer', async () => {
    render(<PageIndex />);
    const footer = await screen.findByTestId('footer');

    expect(footer).toBeTruthy();
  });

  it('should have CardUniversity', async () => {
    render(<PageIndex />);
    const cards = await screen.findAllByTestId('card-university');

    expect(cards).toHaveLength(mockGetUniversitiesSuccessResponse.data.length);
  });

  it('should have pagination', async () => {
    render(<PageIndex />);
    const pagination = await screen.findByLabelText('pagination');

    expect(pagination).toBeTruthy();
  });
});
