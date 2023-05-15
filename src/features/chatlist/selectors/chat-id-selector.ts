import { createSelector } from 'reselect';
import { ChatlistState } from '@/features/chatlist/types';

export const newsListSelector = createSelector(
  (state: ChatlistState) => state.chatId,
  (chatId) => chatId
);
