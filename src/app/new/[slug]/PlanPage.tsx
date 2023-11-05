import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetMyProfile } from './useGetMyProfile';

type FormValues = {
  plan: keyof typeof PLAN_VALUES;
  period: keyof typeof PERIOD_VALUES;
};

const PLAN_VALUES = {
  PREMIUM: '프리미엄',
  STANDARD: '스탠다드',
  BASIC: '베이직',
} as const;

const PERIOD_VALUES = {
  MONTH: '한 달',
  YEAR: '1년',
} as const;

const PlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: myProfileData } = useGetMyProfile(
    {
      uid: location?.state?.data?.id,
    },
    {
      enabled: !!location?.state?.data?.id,
    }
  );

  const [formValues, setFormValues] = useState<FormValues>({
    plan: 'PREMIUM',
    period: 'YEAR',
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/new/addons', {
      state: {
        data: {
          ...location?.state?.data,
          ...formValues,
        },
      },
    });
  };

  const handleChangeSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    if (!location?.state?.data) {
      navigate('/new/sign-up');

      return;
    }
  }, [location?.state?.data, navigate]);

  useEffect(() => {
    // undefined OR false
    if (!myProfileData?.hasSubscribed) {
      return;
    }

    alert('이미 구독하고 있는 유저입니다.');

    navigate(-1);
  }, [myProfileData, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>
          Plan:{' '}
          <select name="plan" onChange={handleChangeSelect}>
            {Object.entries(PLAN_VALUES).map(([value, name]) => {
              return (
                <option key={value} value={value}>
                  {name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Period:{' '}
          <select name="period" onChange={handleChangeSelect}>
            {Object.entries(PERIOD_VALUES).map(([value, name]) => {
              return (
                <option key={value} value={value}>
                  {name}
                </option>
              );
            })}
          </select>
        </label>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PlanPage;
