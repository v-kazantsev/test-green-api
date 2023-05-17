import { apiInstance } from '@/api/api-instance';
import { store } from '@/store/store';
import { TextNotificationAPI } from './types';

const { credentials } = store.getState();

export const TextNotification: TextNotificationAPI  = {
  getNotification: () => apiInstance().get(`/ReceiveNotification/${credentials.apiTokenInstance}`),
};