import { RouteObject } from 'react-router-dom';

import HomePage from './app/page';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
