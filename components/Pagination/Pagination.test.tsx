import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '.';

describe('Component: Pagination', () => {
  describe('without props', () => {
    beforeEach(() => {
      render(<Pagination />);
    });

    it('should match snapshot', () => {
      expect(screen.getByLabelText('pagination')).toMatchSnapshot();
    });

    it('should have previous button', () => {
      expect(screen.getByTestId('button-previous')).toBeTruthy();
    });

    it('should have next button', () => {
      expect(screen.getByTestId('button-next')).toBeTruthy();
    });

    it('should not have any page number button', () => {
      expect(screen.queryByTestId('button-page')).toBeNull();
    });
  });

  describe('more than 5 pages', () => {
    const mockLimit = 10;
    const mockOffset = 30;
    const mockTotal = 200;
    const mockOnChangePage = jest.fn();

    beforeEach(() => {
      render(<Pagination limit={mockLimit} offset={mockOffset} total={mockTotal} onChangePage={mockOnChangePage} />);
    });

    it('should have previous button', () => {
      expect(screen.getByTestId('button-previous')).toBeTruthy();
    });

    it('should have next button', () => {
      expect(screen.getByTestId('button-next')).toBeTruthy();
    });

    it(`should 5 page number button`, () => {
      expect(screen.getAllByTestId('button-page')).toHaveLength(5);
    });

    describe('when user clicks previous button', () => {
      beforeEach(() => {
        const prevButton = screen.getByTestId('button-previous');
        userEvent.click(prevButton);
      });

      it('should call onChangePage with the right payload', () => {
        expect(mockOnChangePage).toHaveBeenLastCalledWith({
          limit: mockLimit,
          offset: mockOffset - mockLimit,
        });
      });
    });

    describe('when user clicks next button', () => {
      beforeEach(() => {
        const nextButton = screen.getByTestId('button-next');
        userEvent.click(nextButton);
      });

      it('should call onChangePage with the right payload', () => {
        expect(mockOnChangePage).toHaveBeenLastCalledWith({
          limit: mockLimit,
          offset: mockOffset + mockLimit,
        });
      });
    });

    describe('when user clicks page number button', () => {
      const mockPage = 2;

      beforeEach(() => {
        const pageButton = screen.getAllByTestId('button-page')[mockPage - 1];
        userEvent.click(pageButton);
      });

      it('should call onChangePage with the right payload', () => {
        expect(mockOnChangePage).toHaveBeenLastCalledWith({
          limit: mockLimit,
          offset: (mockPage - 1) * mockLimit,
        });
      });
    });
  });

  describe('less than 5 pages', () => {
    const mockLimit = 10;
    const mockOffset = 30;
    const mockTotal = 40;

    beforeEach(() => {
      render(<Pagination limit={mockLimit} offset={mockOffset} total={mockTotal} />);
    });

    it('should have previous button', () => {
      expect(screen.getByTestId('button-previous')).toBeTruthy();
    });

    it('should have next button', () => {
      expect(screen.getByTestId('button-next')).toBeTruthy();
    });

    it(`should 4 page number button`, () => {
      expect(screen.getAllByTestId('button-page')).toHaveLength(4);
    });
  });
});
