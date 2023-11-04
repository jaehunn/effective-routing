import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { routes } from './routes';

describe('routes', () => {
  const renderMemoryRouter = (path: string) => {
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: [path],
        })}
      />
    );
  };

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
