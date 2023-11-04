import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { HomePage, SubscriptionStepPage } from './app';

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'new',
        element: <Outlet />,
        children: [
          {
            path: ':step',
            element: <SubscriptionStepPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate replace to="/" />,
  },
];
