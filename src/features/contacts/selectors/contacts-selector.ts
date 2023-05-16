import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const contactsSelector = createSelector(
  (state: RootState) => state.contacts.data,
  (data) => data.slice(0, 50)
);
