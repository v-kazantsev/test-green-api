import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const credentialsSelector = createSelector(
  (state: RootState) => state.credentials,
  (credentials) => credentials
);
