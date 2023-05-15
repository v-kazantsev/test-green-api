import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { MessageRequestBody } from './types';

export const TextMessageAPI = {
  sendTextMessage: (body: MessageRequestBody) => apiInstance().post(`waInstance${ID_INSTANCE}/SendMessage/${TOKEN_INSTANCE}`, body),
};
