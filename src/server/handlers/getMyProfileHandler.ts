import { rest } from 'msw';

import getMyProfile from '~/apis/getMyProfile';

export const SUBSCRIBED_DATA: Awaited<ReturnType<typeof getMyProfile>>['data'] = {
  user: {
    id: 'jaehun13',
    name: 'Jaehun',
    phone: '010-1234-4321',
  },
  hasSubscribed: true,
};

export const UNSUBSCRIBED_DATA: Awaited<ReturnType<typeof getMyProfile>>['data'] = {
  user: {
    id: 'yoonjung12',
    name: 'Yoonjung',
    phone: '010-5678-8765',
  },
  hasSubscribed: false,
};

export const getMyProfileHandler: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const url = new URL(req?.url);

  const uid = url.searchParams?.get('uid');

  if (uid === `${SUBSCRIBED_DATA['user']['id']}`) {
    return res(
      ctx.status(200),
      ctx.json({
        data: SUBSCRIBED_DATA,
      })
    );
  }

  if (uid === `${UNSUBSCRIBED_DATA['user']['id']}`) {
    return res(
      ctx.status(200),
      ctx.json({
        data: UNSUBSCRIBED_DATA,
      })
    );
  }

  return res(ctx.status(200));
};
