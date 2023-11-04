import { Suspense } from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { HomePage, SubscriptionStepPage } from './app';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={'loading'}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'new',
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
