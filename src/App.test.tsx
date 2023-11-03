import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Default', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
