import { apiInstance } from '@/api/api-instance';
import { ContactDetailsAPI } from './types';

export const ContactDetails: ContactDetailsAPI  = {
  getContactDetails: (chatId: string, credentials) => apiInstance().post(`waInstance${credentials.idInstance}/getContactInfo/${credentials.apiTokenInstance}`, {chatId}),
};