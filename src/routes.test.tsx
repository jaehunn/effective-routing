import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

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

  it('/ 로 접근하면, HomePage 가 렌더링된다.', () => {
    renderMemoryRouter('/');

    screen.getByText('HomePage');
  });
});
