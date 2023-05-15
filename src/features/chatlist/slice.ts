import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatlistState } from '@/features/chatlist/types';

const initialState: ChatlistState = {
  chatId: ''
};

const slice = createSlice({
  name: 'chatlist',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number | string | undefined>) => {
      state.chatId = action.payload;
    }, 
  }
});

export const chatlistReducers = slice.reducer;
export const chatlistActions = slice.actions;

