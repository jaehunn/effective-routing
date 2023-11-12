import { Navigate, RouteObject } from 'react-router-dom';

import { AppPage, AppLayout, AppErrorPage } from './app';
import { SignUpPage, DonePage, PlanPage, StepLayout, WrapUpPage } from './app/new/[slug]';

import { appLoader } from './app/loader';
import { stepLoader } from './app/new/[slug]/loader';

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: appLoader,
    element: <AppLayout />,

    /**
     * 발생하는 Error 를 감지할 수 있다.
     *
     *  Element 또는 Layout 컴포넌트에서 발생하는 에러는 isRouteErrorResponse 로 감지되지않는다.
     **/
    errorElement: <AppErrorPage />,
    children: [
      {
        index: true,
        element: <AppPage />,
      },
      {
        path: 'new',
        loader: stepLoader,
        element: <StepLayout />,
        // errorElement: <AppErrorPage />,
        children: [
          /** Path Params 로 받지않고, 명확하게 정의하면 RouteGuard 를 만들지 않아도 된다.  */
          {
            index: true,
            path: 'sign-up',
            element: <SignUpPage />,
          },
          {
            path: 'plan',
            element: <PlanPage />,
          },
          {
            path: 'wrap-up',
            element: <WrapUpPage />,
          },
          {
            path: 'done',
            element: <DonePage />,
          },
          {
            path: '*',
            element: <Navigate replace to="sign-up" />,
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
