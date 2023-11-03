import '@testing-library/jest-dom/vitest';

import { server } from '~/server/node';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'bypass',
  })
);

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
