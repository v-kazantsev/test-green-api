import { apiInstance } from '@/api/api-instance';
import { store } from '@/store/store';
import { TextMessageRequestBody, TextMessageAPI } from './types';

const { credentials } = store.getState();

export const TextMessage: TextMessageAPI  = {
  sendTextMessage: (body: TextMessageRequestBody) => apiInstance().post(`/SendMessage/${credentials.apiTokenInstance}`, body),
};
