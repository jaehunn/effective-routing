import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { server } from './server/browser.ts';
import { routes } from './routes';
import { QueryClientProvider } from './lib';

if (import.meta.env.VITE_NODE_ENV === 'development') {
  server.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </QueryClientProvider>
  </React.StrictMode>
);
