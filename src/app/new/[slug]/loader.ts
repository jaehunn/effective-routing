import { LoaderFunctionArgs } from 'react-router-dom';

export const STEPS = ['sign-up', 'plan', 'addons', 'wrap-up', 'done'];

export const stepLoader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request?.url);

  /**
   * children 들의 렌더링에 대해 최초 1번 호출된다.
   *
   * 계속 호출될 필요가 없는 API 를 호출하면 좋을 것 같다.
   */

  return {
    params,
    searchParams: {
      ...url?.searchParams,
    },
  };
};

/** Response Data */
export type LoaderData = Awaited<ReturnType<typeof stepLoader>>;
