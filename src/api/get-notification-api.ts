import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { TextNotificationAPI } from './types';

export const TextNotification: TextNotificationAPI  = {
  getNotification: () => apiInstance().get(`waInstance${ID_INSTANCE}/ReceiveNotification/${TOKEN_INSTANCE}`),
};