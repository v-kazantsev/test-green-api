import { apiInstance } from '@/api/api-instance';
import { DeleteNotificationAPI } from './types';

export const DeleteNotification: DeleteNotificationAPI  = {
  delete: (id: number, credentials) => apiInstance().delete(`waInstance${credentials.idInstance}/DeleteNotification/${credentials.apiTokenInstance}/${id}`),
};