import { useQuery } from '@tanstack/react-query';
import getMyProfile from '~/apis/getMyProfile';

export const useGetMyProfile = (params: Parameters<typeof getMyProfile>[0]) => {
  return useQuery({
    queryKey: ['SUBSCRIPTION', 'MY_PROFILE', { ...params }],
    queryFn: () => getMyProfile(params),
    select: (data) => data?.data,
  });
};
