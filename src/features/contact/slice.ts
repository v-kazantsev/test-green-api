import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactState } from '@/features/contact/types';
import { ContactDetails, ResponseError } from '@/api/types';
import { getContactDetails } from '@/features/contact/actions/get-contact-details';

const initialState: ContactState = {
  data: {} as ContactDetails,
  isLoading: false,
  error: undefined
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [getContactDetails.pending.type]: (state: ContactState) => {
      state.isLoading = true,
      state.error = undefined
    },
    [getContactDetails.fulfilled.type]: (state: ContactState, action: PayloadAction<ContactDetails>) => {
      state.isLoading = false,
      state.data = action.payload
    },
    [getContactDetails.rejected.type]: (state: ContactState, action: PayloadAction<ResponseError>) => {
      state.isLoading = false,
      state.error = action.payload
    }
  },
});

export const contactActions = slice.actions;
export const contactReducer = slice.reducer;
