import { useParams } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import PlanPage from './PlanPage';

export const STEPS = {
  /** 구독 신청자 정보 입력 */
  'sign-up': <SignUpPage />,

  /** 구독 플랜/기간 입력 */
  plan: <PlanPage />,

  /** 사용할 플랫폼 입력 */
  addons: <div>addons</div>,

  /** 구독 신청 정보 요약 */
  'wrap-up': <div>wrap-up</div>,

  /** 구독 완료 */
  done: <div>done</div>,
};

export type Params = {
  step: keyof typeof STEPS;
};

const StepPage = () => {
  const params = useParams<Params>();

  return STEPS[params?.step ?? 'sign-up'];
};

export default StepPage;
