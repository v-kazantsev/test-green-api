import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { ChatBodyView } from '@/views/chat';
import { activeChatSelector } from '@/features/chat/selectors/active-chat-selector';
import { chatHistorySelector } from '@/features/chat/selectors/chat-history-selector';
import { getChatHistory } from '@/features/chat/actions/get-chat-history';

export const ChatBodyVM = () => {
  const dispatch = useAppDispatch();
  const chatId = useAppSelector(activeChatSelector);
  useEffect(() => {
    if (chatId) dispatch(getChatHistory(chatId));
  }, [chatId, dispatch])
  const chatHistory = useAppSelector(chatHistorySelector);
  return <ChatBodyView history={chatHistory} />
};
