import { apiInstance } from '@/api/api-instance';
import { store } from '@/store/store';
import { ContactsAPI } from './types';

const { credentials } = store.getState();

export const Contacts: ContactsAPI  = {
  getContacts: () => apiInstance().get(`/GetContacts/${credentials.apiTokenInstance}`),
};
