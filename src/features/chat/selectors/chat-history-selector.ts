import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const chatHistorySelector = createSelector(
  (state: RootState) => state.chat.chatHistory,
  (chatHistory) => chatHistory
);
