import { getUserData } from '../../core/auth/Authorization';
import http from './api/Http';

const accreditationsPath = `/large-scale-affiliation/users`;

export async function getNotifications(params = {}) {
  const response = await http
    .get(`${accreditationsPath}/${getUserData().login}/notif`, { params })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
}

export async function setNotificationsViewed(id) {
  const response = await http
    .patch(`${accreditationsPath}/${getUserData().login}/notif/${id}`, { viewed: true, lang: 'pt' })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
}

export async function setNotificationOpened(id) {
  const response = await http
    .patch(`${accreditationsPath}/${getUserData().login}/notif/${id}`, { opened: true, lang: 'pt' })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
}
