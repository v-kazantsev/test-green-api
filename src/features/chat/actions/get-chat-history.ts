import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChatHistory } from '@/api/get-chat-history-api';
import { RootState } from '@/store/store';

export const getChatHistory = createAsyncThunk(
  'CHAT_HISTORY/GET',
  async (chatId: string, { rejectWithValue, getState }) => {
    const { credentials } = getState() as RootState;
    try {
      const { data } = await ChatHistory.getChatHistory({chatId, count: 10 }, credentials);
      console.log('data', data)
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
