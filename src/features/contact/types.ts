import { ContactDetails } from '@/api/types';

export type ContactState = {
  data: ContactDetails;
  isLoading: boolean;
  error: Array<string> | string | undefined;
};
