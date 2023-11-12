import { LoaderFunctionArgs } from 'react-router-dom';

export const appLoader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request?.url);

  /**
   * Root Loader 에서는 인증관련 로직을 수행하면 좋을 것 같다.
   *
   * 쿼리파라미터에 대해 유효성 검증을 전처리하면 좋을 것 같다.
   * 유효하지않은 쿼리파라미터는 throw Error 해서 ErrorBoundary 가 잡도록 한다.
   *
   * Path Params 는 Route 설정 단에서 (routes.tsx)
   * 1. 명확한 Path 정의
   * 2. 정의되지않은 Path 를 Navigate 하는 로직
   * 을 처리해서 여기서 에러페이지로 보여주기보다. Navigate 가 사용자 경험에 좋아보임.
   **/
  // const token = url.searchParams?.get('token');
  // if (token === null) {
  //   throw json({
  //     message: '인증되지않은 사용자입니다.',
  //   });
  // }

  /**
   * Layout 에서 따로 URL 파싱을 할 필요없이, (useParams 등)
   * 기본적으로 인수로 전달받는 값을 내려주면 좋을 것 같다.
   **/
  return {
    params,
    searchParams: {
      ...url?.searchParams,
    },
  };
};
