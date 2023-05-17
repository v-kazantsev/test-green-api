import { apiInstance } from '@/api/api-instance';
import { TextNotificationAPI } from './types';

export const TextNotification: TextNotificationAPI  = {
  getNotification: (credentials) => apiInstance().get(`waInstance${credentials.idInstance}/ReceiveNotification/${credentials.apiTokenInstance}`),
};