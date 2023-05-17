import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactDetails } from '@/api/contact-details-api';
import { RootState } from '@/store/store';

export const getContactDetails = createAsyncThunk(
  'CONTACT_DETAILS/GET',
  async (id: string, { rejectWithValue, getState }) => {
    const { credentials } = getState() as RootState;
    try {
      const { data } = await ContactDetails.getContactDetails(id, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
