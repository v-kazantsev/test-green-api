import { apiInstance } from '@/api/api-instance';
import { store } from '@/store/store';
import { ContactDetailsAPI } from './types';

const { credentials } = store.getState();

export const ContactDetails: ContactDetailsAPI  = {
  getContactDetails: (chatId: string) => apiInstance().post(`/getContactInfo/${credentials.apiTokenInstance}`, {chatId}),
};