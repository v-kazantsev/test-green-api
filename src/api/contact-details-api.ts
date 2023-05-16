import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { ContactDetailsAPI } from './types';

export const ContactDetails: ContactDetailsAPI  = {
  getContactDetails: (chatId: string) => apiInstance().post(`waInstance${ID_INSTANCE}/getContactInfo/${TOKEN_INSTANCE}`, {chatId}),
};