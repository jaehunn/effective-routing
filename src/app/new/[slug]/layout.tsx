import { Outlet, json, useLocation } from 'react-router-dom';

import { useGetMyProfile } from './useGetMyProfile';
import { useEffect } from 'react';

const StepLayout = () => {
  const location = useLocation();

  /**
   * children 에서 공통적으로 사용하는 API 를 호출하고 전달한다.
   *
   * 1. 최초에만 호출하는 API 는 loader 가 적합해보인다. (최초 children 렌더링에 1번만 호출됨.)
   * 2. 계속 호출되어야하는 상황 (구독할 수 있는지를 검증) 에는 적합하겠지만, 그렇지않다면, 공통 레이아웃에서 처리할 필요는 없어보인다.
   **/
  const isEnabledGetMyProfile = location?.state?.data?.id !== undefined;
  const { data: myProfileData } = useGetMyProfile(
    {
      uid: location?.state?.data?.id,
    },
    {
      enabled: location?.state?.data?.id !== undefined,
    }
  );

  useEffect(() => {
    if (isEnabledGetMyProfile) {
      /** Enabled 한 상태에서 검증 */
      if (!myProfileData) {
        throw json(
          {
            message: '사용자 정보가 없습니다.',
          },
          {
            status: 400,
          }
        );
      }
    }
  }, [isEnabledGetMyProfile, myProfileData]);

  if (isEnabledGetMyProfile) {
    if (!myProfileData) {
      return <div>{/* ... */}</div>;
    }
  }

  return (
    <div
      style={
        {
          // TODO: ...
        }
      }
    >
      <Outlet
        context={{
          myProfileData,
        }}
      />
    </div>
  );
};

export default StepLayout;
