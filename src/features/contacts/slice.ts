import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactsState } from '@/features/contacts/types';
import { Contact, ResponseError } from '@/api/types';
import { getContacts } from '@/features/contacts/actions/get-contacts';

const initialState: ContactsState = {
  data: [],
  isLoading: false,
  error: undefined
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    [getContacts.pending.type]: (state: ContactsState) => {
      state.isLoading = true,
      state.error = undefined
    },
    [getContacts.fulfilled.type]: (state: ContactsState, action: PayloadAction<Array<Contact>>) => {
      state.isLoading = false,
      state.data = action.payload
    },
    [getContacts.rejected.type]: (state: ContactsState, action: PayloadAction<ResponseError>) => {
      state.isLoading = false,
      state.error = action.payload
    }
  },
});

export const contactsActions = slice.actions;
export const contactsReducer = slice.reducer;
