import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 프론트 텍스트', () => {
  render(<App />);
  expect(screen.getByText(/프론트/)).toBeInTheDocument();
});
