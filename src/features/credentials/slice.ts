import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CredentialsState } from '@/features/credentials/types';

const initialState: CredentialsState = {
  idInstance: '',
  apiTokenInstance: ''
};

const slice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CredentialsState>) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
    }, 
  }
});

export const credentialsReducer = slice.reducer;
export const credentialsActions = slice.actions;

