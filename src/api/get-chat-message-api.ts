import { apiInstance } from '@/api/api-instance';
import { ChatMessageAPI } from './types';

export const ChatMessage: ChatMessageAPI  = {
  getChatMessage: (body, credentials,) => apiInstance().post(`waInstance${credentials.idInstance}/getChatHistory/${credentials.apiTokenInstance}`, body),
};
