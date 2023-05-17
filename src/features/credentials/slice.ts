import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CredentialsState } from '@/features/credentials/types';

const initialState: CredentialsState = {
  idInstance: undefined,
  apiTokenInstance: undefined
};

const slice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CredentialsState>) => {
      state = action.payload
    }, 
  }
});

export const credentialsReducer = slice.reducer;
export const credentialsActions = slice.actions;

