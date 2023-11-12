import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { isAxiosError } from 'axios';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

const AppErrorPage = () => {
  const error = useRouteError();

  /**
   * Throw Error
   *
   * TODO: Layout 에서 던진 throw json 을 잡지 못하는 이슈.
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

  /** Runtime Error */
  return (
    <div>
      <h1>{DEFAULT_ERROR_MESSAGE}</h1>
    </div>
  );
};

export default AppErrorPage;
