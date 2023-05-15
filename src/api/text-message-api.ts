import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { TextMessageRequestBody, TextMessageAPI } from './types';

export const TextMessage: TextMessageAPI  = {
  sendTextMessage: (body: TextMessageRequestBody) => apiInstance().post(`waInstance${ID_INSTANCE}/SendMessage/${TOKEN_INSTANCE}`, body),
};
