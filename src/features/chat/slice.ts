import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatState } from '@/features/chat/types';
import { ChatMessage, ResponseError } from '@/api/types';
import { getChatHistory } from '@/features/chat/actions/get-chat-history';

const initialState: ChatState = {
  chatId: '',
  chatHistory: [],
  isLoading: false,
  error: undefined
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string | undefined>) => {
      state.chatId = action.payload;
    }, 
  },
  extraReducers: {
    [getChatHistory.pending.type]: (state: ChatState) => {
      state.isLoading = true,
      state.error = undefined
    },
    [getChatHistory.fulfilled.type]: (state: ChatState, action: PayloadAction<Array<ChatMessage>>) => {
      state.isLoading = false,
      state.chatHistory = action.payload
    },
    [getChatHistory.rejected.type]: (state: ChatState, action: PayloadAction<ResponseError>) => {
      state.isLoading = false,
      state.error = action.payload
    }
  },
});

export const chatReducer = slice.reducer;
export const chatActions = slice.actions;
