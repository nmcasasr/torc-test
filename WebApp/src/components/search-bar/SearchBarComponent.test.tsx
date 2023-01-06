import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBarComponent from './SearchBarComponent';

test('renders learn react link', () => {
  render(<SearchBarComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
