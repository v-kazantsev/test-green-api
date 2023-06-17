import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const notificationsSelector = createSelector(
  (state: RootState) => state.notifications,
  (notification) => notification
);
