import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import getMyProfile from '~/apis/getMyProfile';

export const useGetMyProfile = (
  params: Parameters<typeof getMyProfile>[0],
  options?: Pick<UseQueryOptions, 'enabled'>
) => {
  return useQuery({
    queryKey: ['SUBSCRIPTION', 'MY_PROFILE', { ...params }],
    queryFn: () => getMyProfile(params),
    select: (data) => data?.data,
    throwOnError: true,
    ...options,
  });
};

export type MyProfileData = Awaited<ReturnType<typeof useGetMyProfile>>['data'];
