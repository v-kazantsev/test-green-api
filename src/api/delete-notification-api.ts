import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { DeleteNotificationAPI } from './types';

export const DeleteNotification: DeleteNotificationAPI  = {
  delete: (id: number) => apiInstance().delete(`waInstance${ID_INSTANCE}/DeleteNotification/${TOKEN_INSTANCE}/${id}`),
};