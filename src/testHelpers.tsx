import { ReactElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render as RTLrender } from '@testing-library/react';

import { QueryClientProvider } from './lib';
import { routes } from './routes';

export const render = (element: ReactElement) => {
  return RTLrender(<QueryClientProvider>{element}</QueryClientProvider>);
};

export const renderMemoryRouter = (path: string) => {
  render(
    <RouterProvider
      router={createMemoryRouter(routes, {
        initialEntries: [path],
      })}
    />
  );
};
