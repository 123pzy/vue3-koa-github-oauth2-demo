import axios from 'axios';

export const getUserinfo = (code: string) => {
  return axios({
    method: 'GET',
    url: `http://localhost:8080/oauth/redirect?code=${code}`,
  });
};
