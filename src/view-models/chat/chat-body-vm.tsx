import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { ChatBodyView } from '@/views/chat';
import { activeChatSelector } from '@/features/chat/selectors/active-chat-selector';
import { chatHistorySelector } from '@/features/chat/selectors/chat-history-selector';
import { getChatHistory } from '@/features/chat/actions/get-chat-history';
import { getNotification } from '@/features/notifications/actions/get-notification';
import { notificationsSelector } from '@/features/notifications/selectors/notification-selector';

export const ChatBodyVM = () => {
  const dispatch = useAppDispatch();
  const chatId = useAppSelector(activeChatSelector);
  const { notification } = useAppSelector(notificationsSelector);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getNotification());
    }, 30000);
    return () => clearInterval(interval);
  }, [chatId, dispatch]);
  useEffect(() => {
    if (notification && chatId) dispatch(getChatHistory(chatId))
  }, [notification, chatId, dispatch])
  const chatHistory = useAppSelector(chatHistorySelector);
  return <ChatBodyView history={chatHistory} />
};
