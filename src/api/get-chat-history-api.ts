import { apiInstance } from '@/api/api-instance';
import { ChatHistoryAPI } from './types';

export const TextNotification: ChatHistoryAPI  = {
  getChatHistory: (body, credentials,) => apiInstance().post(`waInstance${credentials.idInstance}/getChatHistory/${credentials.apiTokenInstance}`, body),
};
