import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

export const activeChatSelector = createSelector(
  (state: RootState) => state.chat.chatId,
  (chatId) => chatId
);
