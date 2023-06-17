import { ChatMessage } from '@/api/types';

export type ChatState = {
  chatId: string | undefined;
  chatHistory: Array<ChatMessage>;
  isLoading: boolean;
  error: Array<string> | string | undefined;
}