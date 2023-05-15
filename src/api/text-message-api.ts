import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';

export const NewsListAPI = {
  sendTextMessage: (body: string) => apiInstance().post(`waInstance${ID_INSTANCE}/SendMessage/${TOKEN_INSTANCE}`, body),
};
