import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const contactDetailsSelector = createSelector(
  (state: RootState) => state.contact,
  (contact) => contact
);
