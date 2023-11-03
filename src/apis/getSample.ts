import Http from '.';

type Params = {
  // ...
};

type Response = {
  // ...
};

export const PATH = `/api/sample`;

const getSample = (params?: Params) => {
  return Http.get<Response>(PATH, params);
};

export default getSample;
