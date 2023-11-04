import { screen, waitFor } from '@testing-library/react';

import { renderMemoryRouter } from './testHelpers';

describe('routes', () => {
  it('/ 로 접근하면, HomePage 가 렌더링된다.', async () => {
    renderMemoryRouter('/');

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });

  it('정의되지않은 Path 로 접근하면, HomePage 가 렌더링된다.', async () => {
    renderMemoryRouter('/aaa');

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });
});
