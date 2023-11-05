import { MemoryRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';

import { HomePage } from '.';
import { render } from '~/testHelpers';

describe('HomePage', () => {
  const renderHomePage = () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );
  };

  it('"구독하러 가기" CTA 가 보인다.', async () => {
    renderHomePage();

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });
});
