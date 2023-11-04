import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { server } from './server/browser.ts';
import { routes } from './routes';

server.start({
  onUnhandledRequest: 'bypass',
});

const browserRouter = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
