import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCardComponent from './BookCardComponent';

test('renders learn react link', () => {
  render(<BookCardComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
