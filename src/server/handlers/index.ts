import { rest } from 'msw';

import { getMyProfileHandler } from './getMyProfileHandler';
import getMyProfile from '~/apis/getMyProfile';

const BASE_URL = import.meta.env.VITE_API_URL;

export const handlers = () => {
  return [rest.get(`${BASE_URL}${getMyProfile.PATH}`, getMyProfileHandler)];
};
