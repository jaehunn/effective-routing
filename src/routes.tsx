import { Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { HomePage, HomeLayout, HomeErrorPage } from './app';
import { StepErrorPage, StepLayout, StepPage } from './app/new/[slug]';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={'loading'}>
            <HomePage />
          </Suspense>
        ),
        errorElement: <HomeErrorPage />,
      },
      {
        path: 'new',
        element: <StepLayout />,
        children: [
          {
            path: ':step',
            element: (
              <Suspense fallback={'loading'}>
                <StepPage />
              </Suspense>
            ),
            errorElement: <StepErrorPage />,
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
