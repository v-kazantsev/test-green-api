import { apiInstance } from '@/api/api-instance';
import { TextMessageRequestBody, TextMessageAPI } from './types';

export const TextMessage: TextMessageAPI  = {
  sendTextMessage: (body: TextMessageRequestBody, credentials) => apiInstance().post(`waInstance${credentials.idInstance}/SendMessage/${credentials.apiTokenInstance}`, body),
};
