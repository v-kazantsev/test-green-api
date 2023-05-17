import { apiInstance } from '@/api/api-instance';
import { ContactsAPI } from './types';

export const Contacts: ContactsAPI  = {
  getContacts: (credentials) => apiInstance().get(`waInstance${credentials.idInstance}/GetContacts/${credentials.apiTokenInstance}`),
};
