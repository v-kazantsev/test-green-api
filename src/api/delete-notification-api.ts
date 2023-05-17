import { apiInstance } from '@/api/api-instance';
import { store } from '@/store/store';
import { DeleteNotificationAPI } from './types';

const { credentials } = store.getState();

export const DeleteNotification: DeleteNotificationAPI  = {
  delete: (id: number) => apiInstance().delete(`/DeleteNotification/${credentials.apiTokenInstance}/${id}`),
};