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

afterEach(() => {
  jest.clearAllMocks();
});

describe('Page: PageContainer', () => {
  beforeEach(() => {
    waitFor(() => {
      render(<PageIndex />);
    });
  });

  it('should call getUniversities API', () => {
    waitFor(() => {
      expect(mockGetUniversities).toHaveBeenCalled();
    });
  });

  it('should have Navbar', async () => {
    const navigation = await screen.findByRole('navigation');

    expect(navigation).toBeTruthy();
  });

  it('should have Footer', async () => {
    const footer = await screen.findByTestId('footer');

    expect(footer).toBeTruthy();
  });

  it('should have CardUniversity', async () => {
    const cards = await screen.findAllByTestId('card-university');

    expect(cards).toHaveLength(mockGetUniversitiesSuccessResponse.data.length);
  });

  it('should have pagination', async () => {
    const pagination = await screen.findByLabelText('pagination');

    expect(pagination).toBeTruthy();
  });
});
