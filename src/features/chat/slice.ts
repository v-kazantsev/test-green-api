import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatState } from '@/features/chat/types';
import { ChatMessage } from '@/api/types';

const initialState: ChatState = {
  chatId: '',
  chatHistory: []
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string | undefined>) => {
      state.chatId = action.payload;
    }, 
    getHistory: (state, action: PayloadAction<Array<ChatMessage>>) => {
      state.chatHistory = action.payload;
    }
  }
});

export const chatReducer = slice.reducer;
export const chatActions = slice.actions;
