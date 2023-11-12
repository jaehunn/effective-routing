import { MemoryRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';

import { AppPage } from '.';
import { render } from '~/testHelpers';

describe('AppPage', () => {
  const renderAppPage = () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppPage />
      </MemoryRouter>
    );
  };

  it('"구독하러 가기" CTA 가 보인다.', async () => {
    renderAppPage();

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });
});
