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
     * appLoader 그리고 children loader, element 에서 발생한 throw Error 를 감지할 수 있다.
     *
     * <AppLayout /> 에서 발생한 에러는 잡을 수 없다.
     * -> Root ErrorElement 를 만들어주기보다. appLoader 에서 에러를 던지고, AppLayout 은 Layout(UI) 을 잡기위한 용도로 사용하자.
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
