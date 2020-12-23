import { updateToken, getUserData } from '../../core/auth/Authorization';
import authHttp from './api/AuthHttp';
/**
 * Requisita login
 * @param {*} body
 */
const login = async (username, password) => {
  const body = { login: btoa(`${username}:${password}`) };
  try {
    const response = await authHttp.post('/large-scale-affiliation/auth', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.data && response.data.access_token) {
      updateToken(response.data);
      getUserData();
      return response.data;
    }
  } catch (err) {
    return Promise.reject(new Error('authentication.failed'));
  }
  return Promise.reject(new Error('authentication.failed'));
};

export default { login };
