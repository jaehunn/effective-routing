import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { isAxiosError } from 'axios';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

const AppErrorPage = () => {
  const error = useRouteError();

  /**
   * Throw Error (in loader)
   *
   * Layout 에서 던진 throw json 을 잡지 못함. (컴포넌트에서 던진 에러는 isRouteErrorResponse 로 잡지못하는 것 같음.)
   * loader 에서 던지는 에러는 isRouterErrorResponse 로 인식한다.
   *
   * @see https://reactrouter.com/en/main/utils/is-route-error-response
   **/
  if (isRouteErrorResponse(error)) {
    console.log({ error });

    return (
      <div>
        <h1>{error?.data?.message ?? DEFAULT_ERROR_MESSAGE}</h1>
      </div>
    );
  }

  /** API Error */
  if (isAxiosError(error)) {
    return (
      <div>
        <h1>{error?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE}</h1>
      </div>
    );
  }

  /** Default Error */
  return (
    <div>
      <h1>{(error as Error)?.['message'] ?? DEFAULT_ERROR_MESSAGE}</h1>
    </div>
  );
};

export default AppErrorPage;
