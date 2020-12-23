import axios from 'axios';

import { isAuthenticated, logout } from '../../../core/auth/Authorization';
import envConfig from '../../../core/config';
import { getStorageItem } from '../../../core/storage';
import buildTraceId from '../../utils/X-b3-traceid';

const checkToken = async () => {
  if (isAuthenticated()) {
    return true;
  }
  logout();
  window.location.hash = '/';
  throw new Error('Invalid token');
};

const verifyToken = async (req) => {
  return checkToken()
    .then(() => {
      const newReq = {
        ...req,
        headers: {
          ...req.headers,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1.
          Expires: '0',
          Pragma: 'no-cache',
          Authorization: getStorageItem('token-info').token,
          'session-flow-id': getStorageItem('session-flow-id'),
          'X-B3-TraceId': buildTraceId(),
        },
        data: req.data || {},
      };
      return newReq;
    })
    .catch((err) => {
      throw err;
    });
};

const http = axios.create({
  baseURL: envConfig.BFF_BASE_URL,
  paramsSerializer: (params) => {
    let result = '';
    Object.keys(params).forEach((key) => {
      result += `${key}=${encodeURIComponent(params[key])}&`;
    });
    return result.substr(0, result.length - 1);
  },
});
http.interceptors.request.use(
  async (req) => {
    const authReq = await verifyToken(req);
    authReq.params = { ...authReq.params, lang: 'pt' };
    return authReq;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
    // return err;
  }
);

export default http;
