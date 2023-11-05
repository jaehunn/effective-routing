import '@testing-library/jest-dom/vitest';
import { queryClient } from '~/lib';

import { server } from '~/server/node';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'bypass',
  })
);

afterEach(() => {
  server.resetHandlers();

  queryClient.resetQueries();
});

afterAll(() => {
  server.close();
});
