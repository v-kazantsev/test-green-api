import { Contact } from '@/api/types';

export type ContactsState = {
  data: Array<Contact>;
  isLoading: boolean;
  error: Array<string> | string | undefined;
}