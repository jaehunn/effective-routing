import Http from '.';

type Params = {
  uid: number;
};

type Response = {
  data: {
    user: {
      id: number;
      name: string;
      phone: string;
    };
    hasSubscribed: boolean;
  };
};

export const PATH = `/api/my-profile`;

const getMyProfile = (params?: Params) => {
  return Http.get<Response>(PATH, params);
};

getMyProfile.PATH = PATH;

export default getMyProfile;
