import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const chatIdSelector = createSelector(
  (state: RootState) => state.chatlist.chatId,
  (chatId) => chatId
);
