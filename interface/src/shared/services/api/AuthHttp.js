import axios from 'axios';

import envConfig from '../../../core/config';

/**
 * Instância do axios para authorização.
 */
const authHttp = axios.create({ baseURL: envConfig.BFF_BASE_URL });
authHttp.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return err;
  }
);
authHttp.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return err;
  }
);

export default authHttp;
