import { apiInstance } from '@/api/api-instance';
import { ID_INSTANCE, TOKEN_INSTANCE } from '@/config/constants';
import { ContactsAPI } from './types';


export const Contacts: ContactsAPI  = {
  getContacts: () => apiInstance().get(`waInstance${ID_INSTANCE}/GetContacts/${TOKEN_INSTANCE}`),
};
