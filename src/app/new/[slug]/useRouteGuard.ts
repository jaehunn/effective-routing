import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Params } from './page';
import { STEPS } from './layout';

export const useRouteGuard = (params: Partial<Params>) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!params?.step || !(params.step in STEPS)) {
      navigate(`/new/sign-up`, {
        replace: true,
      });

      return;
    }
  }, [navigate, params?.step]);
};
