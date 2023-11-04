import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { server } from './server/browser.ts';
import { routes } from './routes';
import { QueryClientProvider } from './lib';

server.start({
  onUnhandledRequest: 'bypass',
});

const browserRouter = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
